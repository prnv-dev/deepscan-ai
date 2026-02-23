import { useEffect, useRef } from "react";
import { Upload, Brain, Search, FileBarChart } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload Content", desc: "Submit text, images, video, or audio for analysis." },
  { icon: Brain, title: "AI Model Analysis", desc: "Our neural networks process content through multiple detection layers." },
  { icon: Search, title: "Pattern Detection", desc: "Advanced algorithms identify manipulation signatures and anomalies." },
  { icon: FileBarChart, title: "Detailed Report", desc: "Receive a comprehensive authenticity report with confidence scores." },
];

const HowItWorksSection = () => {
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
    <section id="how-it-works" ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="reveal opacity-0 text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            How It <span className="gradient-blue-text">Works</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line for mobile only */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-0.5">
            <div className="h-full w-full bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10 rounded-full" />
          </div>

          {/* Horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5">
            <div className="h-full w-full bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="reveal opacity-0 relative flex lg:flex-col items-start lg:items-center gap-6 lg:gap-0 lg:text-center" style={{ animationDelay: `${i * 0.15}s` }}>
                {/* Step number badge */}
                <div className="relative z-10 flex-shrink-0 group">
                  <div className="h-16 w-16 flex items-center justify-center rounded-2xl gradient-blue text-primary-foreground shadow-lg glow-blue-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/30">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full gradient-blue flex items-center justify-center text-[10px] font-bold text-primary-foreground shadow-md">
                    {i + 1}
                  </div>
                </div>
                <div className="lg:mt-5">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
