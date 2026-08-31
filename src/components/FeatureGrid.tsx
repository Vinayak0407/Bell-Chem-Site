import { CheckCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

interface FeatureGridProps {
  title?: string;
  intro?: string[];
  features: string[];
}

const FeatureGrid = ({ title = "Key Features", intro, features }: FeatureGridProps) => {
  return (
    <div className="mb-16">
      {intro && intro.length > 0 && (
        <div className="max-w-4xl mx-auto mb-12 space-y-4 text-center">
          {intro.map((paragraph, i) => (
            <Reveal key={i} index={i}>
              <p className="text-muted-foreground text-lg leading-relaxed">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      )}

      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
          {title}
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <Reveal key={i} index={i} className="h-full">
            <div className="flex items-center gap-3 p-5 h-full bg-card rounded-xl border border-border shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-300">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground/90">{feature}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
