import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-subtle">
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
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Company" />
                <Textarea placeholder="Tell us about your project..." rows={4} />
                <Button className="w-full shadow-elegant bg-gradient-primary hover:opacity-90">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">📧 Email</h3>
                <p className="text-muted-foreground">hello@yourcompany.com</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">📞 Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">📍 Office</h3>
                <p className="text-muted-foreground">
                  123 Business Ave<br />
                  Suite 100<br />
                  City, State 12345
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