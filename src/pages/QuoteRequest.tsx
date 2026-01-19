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
  Package,
  Users,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const QuoteRequest = () => {
  const { form, onSubmit, isSubmitting, submitStatus } = useQuoteForm();

  return (
    <div className="min-h-screen">
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

      {/* HEADER */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">
              Request a Custom B2B Quote
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HERO */}
        <div className="text-center mb-12">
          <div
            className="
              mx-auto w-fit text-center space-y-4
              px-8 py-6
              bg-black/30 backdrop-blur-md
              rounded-2xl border border-white/20
              shadow-[0_0_25px_rgba(0,0,0,0.3)]
            "
          >
            <div className="flex items-center justify-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-300" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Custom B2B Quote Request
              </h2>
            </div>

            <p className="text-lg text-white max-w-3xl">
              Submit your bulk and export requirements for dyes and chemicals.
              We provide tailored quotations based on application, specifications,
              and long-term supply needs.
            </p>

            <p className="text-sm text-white/80">
              Serving manufacturers & importers across India, Middle East, Europe,
              Southeast Asia, Africa & the Americas.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FORM */}
          <div className="lg:col-span-2">
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
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Quote request received. Our team will contact you shortly.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        Submission failed. Please retry or email us directly.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" /> Response Time
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Typically within 24 business hours.
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-blue-900">
                  Need Immediate Assistance?
                </h3>
                <p className="text-sm text-blue-800">Contact us directly</p>
                <p className="font-medium text-blue-900 mt-2">
                  +91-9999776385
                </p>
                <p className="text-sm text-blue-700">
                  vinayak@bellchem.in
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;
