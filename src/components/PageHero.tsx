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
    <section className="relative overflow-hidden bg-gradient-hero">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, white 0%, transparent 35%), radial-gradient(circle at 85% 80%, white 0%, transparent 35%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: 'url("/SwirlingSpectrum.png")',
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 0%",
          animation: "panBackground 40s ease infinite",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className={`grid gap-12 items-center ${image ? "lg:grid-cols-2" : ""}`}>
          <div className="space-y-6">
            {eyebrow && (
              <Reveal>
                <span className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20">
                  {eyebrow}
                </span>
              </Reveal>
            )}

            <Reveal delay={80}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                {title}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-lg text-white/85 leading-relaxed max-w-2xl">
                {description}
              </p>
            </Reveal>

            {badges && badges.length > 0 && (
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-4 pt-2">
                  {badges.map((badge, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/15 text-white text-sm font-medium"
                    >
                      {badge.icon}
                      <span>{badge.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

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
