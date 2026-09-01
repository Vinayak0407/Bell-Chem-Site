import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";

export const faqItems = [
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "MOQ varies by product and dye class — some items are available in smaller trial quantities, others are bulk-only. Share your requirement via the quote form and we'll confirm the MOQ for that specific product.",
  },
  {
    question: "Do you provide product samples before a bulk order?",
    answer:
      "Yes, samples are available for most products so you can verify shade, quality, and compatibility before committing to a bulk order. Contact our team to arrange samples for your specific application.",
  },
  {
    question: "What are your typical lead times?",
    answer:
      "Lead times depend on the product, order size, and destination — domestic dispatch is generally faster than export shipments. We confirm an exact timeline with every quotation.",
  },
  {
    question: "Do you export outside India?",
    answer:
      "Yes, we regularly supply manufacturers and processors across the Middle East, Africa, Europe, and Southeast Asia, in addition to the domestic Indian market.",
  },
  {
    question: "What payment terms do you accept?",
    answer:
      "We work with standard B2B terms including advance payment, LC (Letter of Credit), and TT (Telegraphic Transfer) for export orders. Specific terms are agreed on a per-order basis.",
  },
  {
    question: "Can you provide quality documentation and certificates?",
    answer:
      "Yes — depending on the product, we can provide relevant quality documentation, batch details, and compliance information to support your import/procurement requirements.",
  },
  {
    question: "Do you offer custom formulations or private labeling?",
    answer:
      "We work with clients on custom shade matching and formulation requirements where feasible. Reach out with your specification and our technical team will advise on what's possible.",
  },
];

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const FAQ = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro
          title="Frequently Asked Questions"
          description="Common questions from manufacturers and exporters we work with."
        />

        <Reveal>
          <Accordion type="single" collapsible className="bg-card rounded-2xl border border-border shadow-soft px-6">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
