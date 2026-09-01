import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger index — each step adds ~80ms of delay */
  index?: number;
  /** Explicit delay in ms, overrides `index` */
  delay?: number;
  as?: "div" | "span" | "li";
  animation?: "up" | "fade" | "scale";
}

const animationClasses: Record<NonNullable<RevealProps["animation"]>, string> = {
  up: "opacity-0 translate-y-6",
  fade: "opacity-0",
  scale: "opacity-0 scale-95",
};

const Reveal = ({
  children,
  className = "",
  index = 0,
  delay,
  as = "div",
  animation = "up",
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const resolvedDelay = delay ?? index * 80;

  return (
    <Tag
      ref={ref as never}
      className={`transition-[opacity,transform] duration-700 ${
        inView ? "opacity-100 translate-y-0 scale-100" : animationClasses[animation]
      } ${className}`}
      style={{
        transitionDelay: inView ? `${resolvedDelay}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: settled ? undefined : "opacity, transform",
      }}
      onTransitionEnd={() => setSettled(true)}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
