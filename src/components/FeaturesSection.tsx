import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Image, Video, Mic } from "lucide-react";
import type { DemoTab } from "@/components/LiveDemoSection";

const features = [
  {
    icon: FileText,
    tab: "text" as DemoTab,
    title: "Fake News Detection",
    description:
      "Paste any article or URL and get an instant AI authenticity score. Our NLP models cross-reference thousands of verified sources.",
  },
  {
    icon: Image,
    tab: "image" as DemoTab,
    title: "AI Image Detection",
    description:
      "Upload an image and our neural network detects if it's AI-generated, manipulated, or authentic with pixel-level analysis.",
  },
  {
    icon: Video,
    tab: "video" as DemoTab,
    title: "Deepfake Video Scanner",
    description:
      "Upload video content to detect facial manipulation, lip-sync anomalies, and temporal inconsistencies frame by frame.",
  },
  {
    icon: Mic,
    tab: "audio" as DemoTab,
    title: "AI Voice Detection",
    description:
      "Analyze audio files to determine if a voice is synthetic, cloned, or genuine using spectral pattern recognition.",
  },
];

interface FeaturesSectionProps {
  onDemoTabSelect?: (tab: DemoTab) => void;
}

const FeaturesSection = ({ onDemoTabSelect }: FeaturesSectionProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-fade-up");
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (tab: DemoTab) => {
    onDemoTabSelect?.(tab);
    setTimeout(() => {
      document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section id="features" ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="reveal opacity-0 text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Comprehensive AI <span className="gradient-blue-text">Detection Suite</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Four powerful detection engines working together to verify content authenticity across every medium.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              onClick={() => handleClick(f.tab)}
              className="reveal opacity-0 group relative rounded-2xl glass-card p-8 transition-all duration-500 hover:glow-blue hover:border-primary/30 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-blue text-primary-foreground transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-5deg]">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.description}</p>
              <Button variant="link" className="p-0 h-auto text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                Try it now →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
