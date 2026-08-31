import { ShieldCheck, Leaf, Award } from "lucide-react";
import Reveal from "@/components/Reveal";

const badges = [
  { icon: ShieldCheck, label: "ISO 9001:2015 Certified" },
  { icon: Leaf, label: "REACH Compliant" },
  { icon: Award, label: "FDA-Approved Grades Available" },
];

const TrustBadges = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`border-y border-border bg-background/70 backdrop-blur-md ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {badges.map((badge, i) => (
            <Reveal key={badge.label} index={i} animation="fade">
              <div className="flex items-center gap-2 text-foreground">
                <badge.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
