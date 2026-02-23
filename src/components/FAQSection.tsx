import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How accurate is DeepScan AI?",
    a: "Our models achieve 99.2% accuracy across all detection types. We continuously train on new manipulation techniques to stay ahead of evolving threats.",
  },
  {
    q: "What file formats are supported?",
    a: "We support all major formats — text (TXT, PDF, DOC), images (JPG, PNG, WebP, GIF), video (MP4, AVI, MOV), and audio (MP3, WAV, FLAC, OGG).",
  },
  {
    q: "Is my data stored after analysis?",
    a: "No. All uploaded content is processed in isolated environments and immediately deleted after analysis. We never retain your data unless you explicitly opt in to save results.",
  },
  {
    q: "Can I use DeepScan AI via API?",
    a: "Yes! Our Pro and Enterprise plans include full REST API access with comprehensive documentation, SDKs for Python, JavaScript, and Go, and webhook support.",
  },
  {
    q: "How fast is the analysis?",
    a: "Most analyses complete in under 2 seconds. Complex video files may take slightly longer depending on duration, but our pipeline is optimized for real-time use.",
  },
  {
    q: "Do you support batch processing?",
    a: "Enterprise customers can process thousands of files simultaneously via our batch API. Contact our sales team for custom throughput requirements.",
  },
];

const FAQSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-fade-up")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="reveal opacity-0 text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked <span className="gradient-blue-text">Questions</span>
          </h2>
        </div>

        <div className="reveal opacity-0 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="faq-item glass-card rounded-xl px-6 border border-white/30 dark:border-white/10 transition-all duration-300 hover:border-primary/20"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
