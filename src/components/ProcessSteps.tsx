import { MessageSquare, FileText, FlaskConical, Truck } from "lucide-react";
import Reveal from "@/components/Reveal";

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
    <section className="py-20 lg:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A straightforward process from first inquiry to bulk delivery.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.title} index={i} className="h-full">
              <div className="card-shimmer relative h-full bg-card rounded-2xl border border-border shadow-soft p-6 pt-8 text-center hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 animate-panel-glow" style={{ animationDelay: `${i * 0.3}s` }}>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-hero text-white flex items-center justify-center text-sm font-bold shadow-elegant">
                  {i + 1}
                </div>
                <step.icon className="h-8 w-8 text-primary mx-auto mb-4 mt-2" />
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
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
