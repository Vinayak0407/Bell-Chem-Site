import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useContactForm } from "@/hooks/useContactForm";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const { form, onSubmit, isSubmitting, submitStatus } = useContactForm();

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with our team for a consultation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input 
                        placeholder="First Name" 
                        {...form.register('firstName')}
                        className={form.formState.errors.firstName ? 'border-red-500' : ''}
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Input 
                        placeholder="Last Name" 
                        {...form.register('lastName')}
                        className={form.formState.errors.lastName ? 'border-red-500' : ''}
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Input 
                      placeholder="Email Address" 
                      type="email" 
                      {...form.register('email')}
                      className={form.formState.errors.email ? 'border-red-500' : ''}
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input 
                      placeholder="Company" 
                      {...form.register('company')}
                      className={form.formState.errors.company ? 'border-red-500' : ''}
                    />
                    {form.formState.errors.company && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.company.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input 
                      placeholder="Phone Number (Optional)" 
                      {...form.register('phone')}
                    />
                  </div>
                  
                  <div>
                    <Select onValueChange={(value) => form.setValue('productInterest', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Product Interest (Optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="textile-dyes">Textile Dyes</SelectItem>
                        <SelectItem value="industrial-chemicals">Industrial Chemicals</SelectItem>
                        <SelectItem value="pharmaceutical-intermediates">Pharmaceutical Intermediates</SelectItem>
                        <SelectItem value="specialty-chemicals">Specialty Chemicals</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      rows={4} 
                      {...form.register('message')}
                      className={form.formState.errors.message ? 'border-red-500' : ''}
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  {submitStatus === 'success' && (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  {submitStatus === 'error' && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        Sorry, there was an error sending your message. Please try again or contact us directly.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full shadow-elegant bg-gradient-primary hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">📧 Email</h3>
                <p className="text-muted-foreground">akjain.ranas@gmail.com</p>
                <p className="text-muted-foreground text-sm">akjain.ranas@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">📞 Phone</h3>
                <p className="text-muted-foreground">+91-9999776385</p>
                <p className="text-muted-foreground text-sm">+91-9999776385 (Sales)</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">📍 Office</h3>
                <p className="text-muted-foreground">
                  16/331A Khajoor Road<br />
                  Karol Bagh<br />
                  New Delhi, 110005<br />
                  India
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">🕒 Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
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