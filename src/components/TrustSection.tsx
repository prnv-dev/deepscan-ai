import { useEffect, useRef } from "react";
import { Brain, ShieldCheck, Lock } from "lucide-react";

const pillars = [
  { icon: Brain, title: "Built with Advanced Neural Networks", desc: "State-of-the-art transformer models trained on millions of verified and manipulated samples." },
  { icon: ShieldCheck, title: "End-to-End Secure Processing", desc: "All data is encrypted in transit and at rest. Processing happens in isolated, audited environments." },
  { icon: Lock, title: "No Data Stored Without Consent", desc: "Your content is never retained after analysis unless you explicitly choose to save results." },
];

const TrustSection = () => {
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
    <section id="security" ref={ref} className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="reveal opacity-0 text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            Trust & Security
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Your Privacy, <span className="gradient-blue-text">Our Priority</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="reveal opacity-0 group glass-card rounded-2xl p-8 text-center transition-all duration-500 hover:glow-blue hover:border-primary/30 hover:-translate-y-2"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="mx-auto mb-5 h-14 w-14 flex items-center justify-center rounded-2xl gradient-blue text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                <p.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
