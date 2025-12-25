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
import { useContactForm } from "@/hooks/useContactForm";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Globe, Package } from "lucide-react";

const Contact = () => {
  const { form, onSubmit, isSubmitting, submitStatus } = useContactForm();

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO / INTRO — B2B EXPORT POSITIONED */}
        <div className="text-center mb-16">
          <div
            className="
              mx-auto w-fit text-center space-y-4
              px-8 py-6
              bg-black/30 backdrop-blur-md
              rounded-2xl border border-white/20
              shadow-[0_0_25px_rgba(0,0,0,0.3)]
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Contact <span className="bg-gradient-primary bg-clip-text text-transparent">BellChem</span>
            </h2>

            <p className="text-lg text-white max-w-xl">
              B2B inquiries for dyes, industrial chemicals, textile auxiliaries,
              and specialty chemicals. Serving manufacturers, exporters, and
              textile processors worldwide.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm pt-2">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Global Export Support
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Bulk & Custom Supply
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FORM */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>B2B Inquiry Form</CardTitle>
                <CardDescription>
                  Share your requirements and our team will respond within 24 hours.
                  Export and bulk inquiries are prioritized.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="First Name"
                        {...form.register("firstName")}
                        className={form.formState.errors.firstName ? "border-red-500" : ""}
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Input
                        placeholder="Last Name"
                        {...form.register("lastName")}
                        className={form.formState.errors.lastName ? "border-red-500" : ""}
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Input
                      placeholder="Business Email Address"
                      type="email"
                      {...form.register("email")}
                      className={form.formState.errors.email ? "border-red-500" : ""}
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      placeholder="Company / Organization"
                      {...form.register("company")}
                      className={form.formState.errors.company ? "border-red-500" : ""}
                    />
                    {form.formState.errors.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      placeholder="Phone / WhatsApp (Optional)"
                      {...form.register("phone")}
                    />
                  </div>

                  <div>
                    <Select onValueChange={(value) => form.setValue("productInterest", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Product Category of Interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reactive-dyes">Reactive Dyes</SelectItem>
                        <SelectItem value="vat-dyes">Vat Dyes</SelectItem>
                        <SelectItem value="discharge-dyes">Discharge Dyes</SelectItem>
                        <SelectItem value="textile-auxiliaries">Textile Auxiliaries</SelectItem>
                        <SelectItem value="industrial-chemicals">Industrial Chemicals</SelectItem>
                        <SelectItem value="specialty-chemicals">Specialty Chemicals</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Please describe your application, quantity requirement, country of destination, and any specifications..."
                      rows={5}
                      {...form.register("message")}
                      className={form.formState.errors.message ? "border-red-500" : ""}
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitStatus === "success" && (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Thank you. Your inquiry has been received. Our export team will
                        contact you within 24 hours.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        There was an error submitting your inquiry. Please try again
                        or contact us directly via email.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="w-full shadow-elegant bg-gradient-primary hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit B2B Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">📧 Email</h3>
                <p className="text-muted-foreground">vinayak@bellchem.in</p>
                <p className="text-muted-foreground text-sm">akjain.ranas@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">📞 Phone / WhatsApp</h3>
                <p className="text-muted-foreground">+91-9999776385</p>
                <p className="text-muted-foreground text-sm">Sales & Export Inquiries</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">📍 Office</h3>
                <p className="text-muted-foreground">
                  Ground Floor, Godown No. 198<br />
                  Tilak Bazar, Khari Baoli<br />
                  New Delhi – 110007<br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">🕒 Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday – Friday: 9:00 AM – 6:00 PM<br />
                  Saturday: 9:00 AM – 2:00 PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
