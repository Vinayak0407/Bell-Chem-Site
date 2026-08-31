import { ShieldCheck, Leaf, Award } from "lucide-react";
import Reveal from "@/components/Reveal";

const badges = [
  { icon: ShieldCheck, label: "ISO 9001:2015 Certified" },
  { icon: Leaf, label: "REACH Compliant" },
  { icon: Award, label: "FDA-Approved Grades Available" },
];

const TrustBadges = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {badges.map((badge, i) => (
            <Reveal key={badge.label} index={i} animation="fade">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border text-foreground shadow-soft">
                <badge.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-shadow-soft">{badge.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
