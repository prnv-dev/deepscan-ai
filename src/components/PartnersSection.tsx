import { useEffect, useRef } from "react";

const partners = [
  "Reuters", "AP News", "The Guardian", "BBC", "MIT", "Stanford", "Google News", "Meta",
];

const PartnersSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-fade-up")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Duplicate for seamless marquee loop
  const doubled = [...partners, ...partners];

  return (
    <section ref={ref} className="py-16 border-b border-border/40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="reveal opacity-0 text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by leading organizations worldwide
          </p>
        </div>
      </div>
      <div className="reveal opacity-0 relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee marquee-track whitespace-nowrap">
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="inline-block mx-8 md:mx-14 font-display text-lg md:text-xl font-bold text-muted-foreground/40 hover:text-primary/70 transition-colors duration-300 select-none cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
