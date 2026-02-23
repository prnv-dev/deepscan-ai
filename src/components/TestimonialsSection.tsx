import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Investigative Journalist",
    org: "The Guardian",
    quote: "DeepScan AI saved us from publishing a story based on AI-generated images. It's now an essential part of our verification workflow.",
    avatar: "SC",
  },
  {
    name: "Dr. Marcus Webb",
    role: "Misinformation Researcher",
    org: "MIT Media Lab",
    quote: "The accuracy of the deepfake detection is remarkable. We've tested it against our own benchmarks and it consistently outperforms competitors.",
    avatar: "MW",
  },
  {
    name: "Priya Sharma",
    role: "Head of Trust & Safety",
    org: "TechCorp Inc.",
    quote: "We process over 2M pieces of content daily. DeepScan's API handles it flawlessly with sub-second response times.",
    avatar: "PS",
  },
  {
    name: "James Rodriguez",
    role: "Fact-Checker",
    org: "Reuters",
    quote: "The voice detection feature caught a synthetic audio clip that fooled two other tools. Game-changing technology.",
    avatar: "JR",
  },
];

const TestimonialsSection = () => {
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
    <section id="testimonials" ref={ref} className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="reveal opacity-0 text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Trusted by <span className="gradient-blue-text">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal opacity-0 glass-card rounded-2xl p-6 transition-all duration-500 hover:border-primary/20"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-blue flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
