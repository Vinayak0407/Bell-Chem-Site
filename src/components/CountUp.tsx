import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** e.g. "1000+", "98%", "40+", "5000+" */
  value: string;
  className?: string;
  duration?: number;
}

const easeOutQuad = (t: number) => t * (2 - t);

const CountUp = ({ value, className = "", duration = 1200 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);

  const match = value.match(/^([\d,]+)(.*)$/);
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const node = ref.current;
    if (!node || target === null) return;

    if (typeof IntersectionObserver === "undefined") {
      setDisplay(String(target));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(String(Math.round(easeOutQuad(progress) * target)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  if (target === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
