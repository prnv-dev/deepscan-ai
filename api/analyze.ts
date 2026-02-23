import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { type, content, fileBase64, fileMimeType } = req.body;

    if (!type) {
      return res.status(400).json({ error: "Missing type" });
    }

    if (type !== "text" && type !== "image") {
      return res.status(400).json({ error: "Only 'text' and 'image' supported" });
    }

    if (!content && !fileBase64) {
      return res.status(400).json({ error: "No content provided" });
    }

    const trimmedContent = content
      ? String(content).slice(0, 4000)
      : "";

    let systemPrompt = "";

    // ===============================
    // TEXT FORENSIC PROMPT
    // ===============================
    if (type === "text") {
      systemPrompt = `
You are an advanced forensic text authenticity analyzer.

Strictly evaluate:

1. Logical consistency
2. Emotional manipulation
3. Exaggerated or sensational language
4. Unsupported claims
5. Fake statistics
6. Source credibility
7. Bias indicators
8. Structural coherence

Return STRICT JSON:

{
  "score": number,
  "risk": "Low" | "Medium" | "High",
  "breakdown": [
    { "label": "Logical Consistency", "value": number },
    { "label": "Manipulation Signals", "value": number },
    { "label": "Source Credibility", "value": number }
  ]
}

Scoring:
85–100 = Highly credible
60–84 = Medium risk
Below 60 = High misinformation risk

Return only valid JSON.
`;
    }

    // ===============================
    // IMAGE FORENSIC PROMPT
    // ===============================
    if (type === "image") {
      systemPrompt = `
You are an AI forensic image authenticity evaluator.

Analyze the image carefully.

Evaluate:

1. AI generation artifacts
2. Lighting consistency
3. Facial symmetry (if applicable)
4. Background blending
5. Texture realism
6. Visual inconsistencies

Return STRICT JSON:

{
  "score": number,
  "risk": "Low" | "Medium" | "High",
  "breakdown": [
    { "label": "AI Artifacts", "value": number },
    { "label": "Visual Consistency", "value": number },
    { "label": "Realism Indicators", "value": number }
  ]
}

Return only valid JSON.
`;
    }

    let messages: any[] = [
      { role: "system", content: systemPrompt }
    ];

    // IMAGE CASE (Vision Input)
    if (type === "image" && fileBase64 && fileMimeType) {
      messages.push({
        role: "user",
        content: [
          { type: "text", text: "Analyze this image for authenticity risk." },
          {
            type: "image_url",
            image_url: {
              url: `data:${fileMimeType};base64,${fileBase64}`
            }
          }
        ]
      });
    } else {
      // TEXT CASE
      messages.push({
        role: "user",
        content: trimmedContent
      });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages,
          temperature: 0.2
        })
      }
    );

    const data = await response.json();

    if (!data.choices?.[0]?.message?.content) {
      return res.status(500).json({
        error: "No AI response",
        details: data
      });
    }

    let raw = data.choices[0].message.content.trim();

    // Remove markdown formatting if present
    if (raw.startsWith("```")) {
      raw = raw.replace(/```json|```/g, "").trim();
    }

    let parsed;

    try {
      parsed = JSON.parse(raw);
    } catch {
      return res.status(500).json({
        error: "Invalid JSON from model",
        raw
      });
    }

    // ===============================
    // SCORE STABILIZATION
    // ===============================
    if (Array.isArray(parsed.breakdown)) {
      const avg =
        parsed.breakdown.reduce(
          (sum: number, b: any) => sum + Number(b.value || 0),
          0
        ) / parsed.breakdown.length;

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