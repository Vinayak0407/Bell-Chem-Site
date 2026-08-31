import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useQuoteForm } from "@/hooks/useQuoteForm";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CheckCircle,
  AlertCircle,
  Calculator,
  Clock,
} from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const QuoteRequest = () => {
  const { form, onSubmit, isSubmitting, submitStatus } = useQuoteForm();

  return (
    <>
      {/* 🚫 NOINDEX — QUOTE PAGES SHOULD NOT RANK */}
      <SEO
        title="Request a Quote | Custom B2B Chemical & Dye Supply – BellChem"
        description="Request a custom B2B quote from BellChem (A. K. Jain & Co.) for bulk and export supply of dyes, industrial chemicals, textile auxiliaries, and specialty chemicals."
        canonical="https://www.bellchem.in/quote"
        noIndex
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.bellchem.in/quote#service",
          name: "Custom B2B Chemical Quotation",
          serviceType: "Bulk & Export Chemical Supply",
          provider: {
            "@type": "Organization",
            "@id": "https://www.bellchem.in/#organization",
            name: "A. K. Jain & Co. (BellChem)",
            url: "https://www.bellchem.in"
          },
          areaServed: "Worldwide",
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Manufacturers, Importers & Exporters"
          }
        }}
      />

      <Header />

      <PageHero
        eyebrow="24-hour response"
        title="Custom B2B Quote Request"
        description="Submit your bulk and export requirements for dyes and chemicals. We provide tailored quotations based on application, specifications, and long-term supply needs."
        badges={[
          { icon: <Calculator className="h-4 w-4" />, label: "Tailored Pricing" },
          { icon: <Clock className="h-4 w-4" />, label: "24-Hour Turnaround" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Serving manufacturers & importers across India, Middle East, Europe,
          Southeast Asia, Africa & the Americas.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FORM */}
          <Reveal className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Quote Request Form</CardTitle>
                <CardDescription>
                  Our export team typically responds within{" "}
                  <strong>24 business hours</strong>.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* CONTACT */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="First Name *" {...form.register("firstName")} />
                      <Input placeholder="Last Name *" {...form.register("lastName")} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input type="email" placeholder="Business Email *" {...form.register("email")} />
                      <Input placeholder="Phone / WhatsApp *" {...form.register("phone")} />
                    </div>
                  </div>

                  {/* STATUS */}
                  {submitStatus === "success" && (
                    <Alert className="border-green-900/40 bg-green-950/40">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <AlertDescription className="text-green-300">
                        Quote request received. Our team will contact you shortly.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert className="border-red-900/40 bg-red-950/40">
                      <AlertCircle className="h-4 w-4 text-red-400" />
                      <AlertDescription className="text-red-300">
                        Submission failed. Please retry or email us directly.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <Reveal index={0}>
              <Card className="card-shimmer hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" /> Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Typically within 24 business hours.
                </CardContent>
              </Card>
            </Reveal>

            <Reveal index={1}>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-primary">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-sm text-foreground/80">Contact us directly</p>
                  <p className="font-medium text-primary mt-2">
                    +91-9999776385
                  </p>
                  <p className="text-sm text-foreground/70">
                    vinayak@bellchem.in
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default QuoteRequest;
