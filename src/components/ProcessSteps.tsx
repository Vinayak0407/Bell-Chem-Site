import { MessageSquare, FileText, FlaskConical, Truck } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Requirement",
    description: "Tell us the product, application, and quantity you need via the quote form or a direct call.",
  },
  {
    icon: FileText,
    title: "Get a Tailored Quote",
    description: "Our team confirms specifications, pricing, and lead time based on your exact requirement.",
  },
  {
    icon: FlaskConical,
    title: "Sample & Quality Check",
    description: "Request a sample to verify shade, purity, and performance before committing to bulk.",
  },
  {
    icon: Truck,
    title: "Bulk Supply & Dispatch",
    description: "We process your order and coordinate dispatch, including export documentation where needed.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro
          title="How It Works"
          description="A straightforward process from first inquiry to bulk delivery."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <Reveal key={step.title} index={i} className="relative h-full">
              {/* Badge sits outside the card's own overflow:hidden (needed for the
                  shimmer sweep) so it doesn't get clipped where it pokes above the card */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-gradient-hero text-white flex items-center justify-center text-lg font-bold shadow-professional">
                {i + 1}
              </div>
              <div className="card-shimmer h-full bg-card rounded-2xl border border-border shadow-elegant p-8 pt-12 text-center hover:shadow-professional hover:-translate-y-1 transition-all duration-300">
                <step.icon className="h-10 w-10 text-primary mx-auto mb-5 mt-2" />
                <h3 className="text-lg font-semibold text-foreground mb-3 min-h-[3.5rem] flex items-center justify-center">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
