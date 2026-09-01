import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

interface SectionIntroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

/**
 * Solid, opaque panel for section headings — guarantees text contrast
 * regardless of how vivid the page background is, without dimming the
 * background itself (the panel is bounded, not a full-bleed scrim).
 */
const SectionIntro = ({ eyebrow, title, description, className = "" }: SectionIntroProps) => {
  return (
    <Reveal className={`text-center mb-16 ${className}`}>
      <div className="inline-block max-w-3xl mx-auto bg-card border border-border rounded-2xl shadow-elegant px-8 py-8 sm:px-12">
        {eyebrow && (
          <span className="inline-block mb-3 text-sm font-semibold tracking-wide uppercase text-primary">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
    </Reveal>
  );
};

export default SectionIntro;
