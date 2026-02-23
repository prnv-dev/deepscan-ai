export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { type, content } = req.body;

    if (!content || !type) {
      return res.status(400).json({ error: "Missing type or content" });
    }

    // Trim long documents (token stability)
    const trimmedContent = String(content).slice(0, 4000);

    let systemPrompt = "";

    // ===============================
    // TEXT FORENSIC SYSTEM PROMPT
    // ===============================
    if (type === "text") {
      systemPrompt = `
You are a professional forensic text authenticity analyzer.

Perform a strict credibility assessment.

Carefully evaluate:

1. Logical consistency and contradictions
2. Emotional manipulation tactics
3. Sensational or exaggerated wording
4. Unsupported claims
5. Fabricated statistics
6. Missing citations
7. Authority misuse
8. Structural coherence
9. Bias indicators
10. Misinformation probability

Be conservative and analytical.

Return STRICT JSON only:

{
  "score": number,
  "risk": "Low" | "Medium" | "High",
  "breakdown": [
    { "label": "Logical Consistency", "value": number },
    { "label": "Manipulation Signals", "value": number },
    { "label": "Source Credibility", "value": number }
  ]
}

Rules:
- 85–100 = Highly credible
- 60–84 = Questionable
- Below 60 = Likely misinformation

Return only valid JSON. No explanation.
`;
    }

    // ===============================
    // IMAGE FORENSIC SYSTEM PROMPT
    // ===============================
    if (type === "image") {
      systemPrompt = `
You are an AI forensic image authenticity evaluator.

Based on known deepfake and AI generation patterns,
estimate authenticity risk carefully.

Analyze:

1. AI generation artifacts
2. Facial symmetry inconsistencies
3. Lighting and shadow mismatches
4. Background blending anomalies
5. Over-smoothing or unnatural textures
6. Metadata plausibility

Be analytical and conservative.

Return STRICT JSON only:

{
  "score": number,
  "risk": "Low" | "Medium" | "High",
  "breakdown": [
    { "label": "AI Generation Artifacts", "value": number },
    { "label": "Visual Consistency", "value": number },
    { "label": "Metadata Plausibility", "value": number }
  ]
}

Return only valid JSON. No explanation.
`;
    }

    if (!systemPrompt) {
      return res.status(400).json({ error: "Invalid type. Use 'text' or 'image'." });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3-70b-instruct",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: trimmedContent }
          ],
          temperature: 0.1
        }),
      }
    );

    const data = await response.json();

    if (!data.choices || !data.choices[0]?.message?.content) {
      return res.status(500).json({
        error: "No AI response",
        details: data
      });
    }

    let raw = data.choices[0].message.content.trim();

    // Remove markdown formatting
    if (raw.startsWith("```")) {
      raw = raw.replace(/```json|```/g, "").trim();
    }

    let parsed;

    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      return res.status(500).json({
        error: "Invalid JSON from model",
        raw
      });
    }

    // ===============================
    // SCORE STABILIZATION (Backend Control)
    // ===============================
    if (Array.isArray(parsed.breakdown)) {
      const avg =
        parsed.breakdown.reduce((sum: number, b: any) => sum + Number(b.value || 0), 0) /
        parsed.breakdown.length;

      parsed.score = Math.round(avg);

      if (avg >= 85) parsed.risk = "Low";
      else if (avg >= 60) parsed.risk = "Medium";
      else parsed.risk = "High";
    }

    return res.status(200).json(parsed);

  } catch (error: any) {
    return res.status(500).json({
      error: "Server error",
      details: error.message
    });
  }
}