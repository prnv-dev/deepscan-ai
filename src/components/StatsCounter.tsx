import { useEffect, useRef, useState } from "react";

const useCountUp = (end: number, duration = 2000, start = 0, suffix = "") => {
  const [value, setValue] = useState(start);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, end, duration, start]);

  return { value, ref, suffix };
};

const stats = [
  { end: 99, suffix: ".2%", label: "Accuracy" },
  { end: 50, suffix: "M+", label: "Scans" },
  { end: 2, suffix: "s", prefix: "<", label: "Avg Speed" },
];

const StatsCounter = () => {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} />
      ))}
    </div>
  );
};

const StatItem = ({ end, suffix, prefix, label }: { end: number; suffix: string; prefix?: string; label: string }) => {
  const { value, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">
        {prefix}{value}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

export default StatsCounter;
