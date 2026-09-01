import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

interface PageHeroBadge {
  icon: ReactNode;
  label: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  badges?: PageHeroBadge[];
  image?: ReactNode;
}

const PageHero = ({ eyebrow, title, description, badges, image }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className={`grid gap-12 items-center ${image ? "lg:grid-cols-2" : ""}`}>
          {/* Solid content panel — guaranteed contrast regardless of the swirl behind it */}
          <Reveal className="bg-card border border-border rounded-3xl shadow-professional p-8 sm:p-10 space-y-6">
            {eyebrow && (
              <span className="inline-flex items-center px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary">
                {eyebrow}
              </span>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              {title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>

            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-2">
                {badges.map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg border border-border text-foreground text-sm font-medium"
                  >
                    {badge.icon}
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            )}
          </Reveal>

          {image && (
            <Reveal delay={120} animation="scale" className="relative">
              {image}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
