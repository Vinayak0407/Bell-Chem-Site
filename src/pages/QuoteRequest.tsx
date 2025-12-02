import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuoteForm } from "@/hooks/useQuoteForm";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Calculator, Clock, Package, Users } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const QuoteRequest = () => {
  const { form, onSubmit, isSubmitting, submitStatus } = useQuoteForm();

  return (
    <div className="min-h-screen">
      {/* Header */}
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
            <h1 className="text-2xl font-bold text-gray-900">Request a Quote</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calculator className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get Your Custom Quote</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tell us about your requirements and we'll provide you with a detailed quote tailored to your needs. 
            Our team will review your request and get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Quote Request Form</CardTitle>
                <CardDescription>
                  Please fill out all required fields to get an accurate quote. The more details you provide, the better we can serve you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input 
                          placeholder="First Name *" 
                          {...form.register('firstName')}
                          className={form.formState.errors.firstName ? 'border-red-500' : ''}
                        />
                        {form.formState.errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <Input 
                          placeholder="Last Name *" 
                          {...form.register('lastName')}
                          className={form.formState.errors.lastName ? 'border-red-500' : ''}
                        />
                        {form.formState.errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input 
                          placeholder="Email Address *" 
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
                          placeholder="Phone Number *" 
                          {...form.register('phone')}
                          className={form.formState.errors.phone ? 'border-red-500' : ''}
                        />
                        {form.formState.errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Company Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input 
                          placeholder="Company Name *" 
                          {...form.register('company')}
                          className={form.formState.errors.company ? 'border-red-500' : ''}
                        />
                        {form.formState.errors.company && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.company.message}</p>
                        )}
                      </div>
                      <div>
                        <Input 
                          placeholder="Job Title *" 
                          {...form.register('jobTitle')}
                          className={form.formState.errors.jobTitle ? 'border-red-500' : ''}
                        />
                        {form.formState.errors.jobTitle && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.jobTitle.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Select onValueChange={(value) => form.setValue('industry', value)}>
                        <SelectTrigger className={form.formState.errors.industry ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Industry *" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="textile">Textile Manufacturing</SelectItem>
                          <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                          <SelectItem value="chemical">Chemical Manufacturing</SelectItem>
                          <SelectItem value="automotive">Automotive</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="food">Food & Beverage</SelectItem>
                          <SelectItem value="cosmetics">Cosmetics & Personal Care</SelectItem>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.industry && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.industry.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Product Requirements */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Product Requirements</h3>
                    <div>
                      <Select onValueChange={(value) => form.setValue('productCategory', value)}>
                        <SelectTrigger className={form.formState.errors.productCategory ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Product Category *" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reactive-dyes">Reactive Dyes</SelectItem>
                          <SelectItem value="disperse-dyes">Disperse Dyes</SelectItem>
                          <SelectItem value="acid-dyes">Acid Dyes</SelectItem>
                          <SelectItem value="direct-dyes">Direct Dyes</SelectItem>
                          <SelectItem value="industrial-chemicals">Industrial Chemicals</SelectItem>
                          <SelectItem value="pharmaceutical-intermediates">Pharmaceutical Intermediates</SelectItem>
                          <SelectItem value="specialty-chemicals">Specialty Chemicals</SelectItem>
                          <SelectItem value="textile-auxiliaries">Textile Auxiliaries</SelectItem>
                          <SelectItem value="multiple">Multiple Categories</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.productCategory && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.productCategory.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Textarea 
                        placeholder="Specific Products Needed * (Please list the exact products, grades, or specifications you require)" 
                        rows={3} 
                        {...form.register('specificProducts')}
                        className={form.formState.errors.specificProducts ? 'border-red-500' : ''}
                      />
                      {form.formState.errors.specificProducts && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.specificProducts.message}</p>
                      )}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input 
                          placeholder="Quantity Required *" 
                          {...form.register('quantity')}
                          className={form.formState.errors.quantity ? 'border-red-500' : ''}
                        />
                        {form.formState.errors.quantity && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.quantity.message}</p>
                        )}
                      </div>
                      <div>
                        <Select onValueChange={(value) => form.setValue('timeline', value)}>
                          <SelectTrigger className={form.formState.errors.timeline ? 'border-red-500' : ''}>
                            <SelectValue placeholder="Timeline *" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                            <SelectItem value="asap">ASAP (Within 2 weeks)</SelectItem>
                            <SelectItem value="month">Within 1 month</SelectItem>
                            <SelectItem value="quarter">Within 3 months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                        {form.formState.errors.timeline && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.timeline.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Additional Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input 
                          placeholder="Budget Range (Optional)" 
                          {...form.register('budget')}
                        />
                      </div>
                      <div>
                        <Select onValueChange={(value) => form.setValue('urgency', value)}>
                          <SelectTrigger className={form.formState.errors.urgency ? 'border-red-500' : ''}>
                            <SelectValue placeholder="Urgency Level *" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="critical">Critical</SelectItem>
                          </SelectContent>
                        </Select>
                        {form.formState.errors.urgency && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.urgency.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Textarea 
                        placeholder="Technical Specifications (Optional)" 
                        rows={3} 
                        {...form.register('specifications')}
                      />
                    </div>
                    
                    <div>
                      <Textarea 
                        placeholder="Additional Requirements or Special Instructions (Optional)" 
                        rows={3} 
                        {...form.register('additionalRequirements')}
                      />
                    </div>
                    
                    <div>
                      <Select onValueChange={(value) => form.setValue('preferredContactMethod', value)}>
                        <SelectTrigger className={form.formState.errors.preferredContactMethod ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Preferred Contact Method *" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="video-call">Video Call</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.preferredContactMethod && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.preferredContactMethod.message}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        <strong>Quote Request Submitted Successfully!</strong><br />
                        Thank you for your request. Our team will review your requirements and get back to you within 24 hours with a detailed quote.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  {submitStatus === 'error' && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        <strong>Error Submitting Quote Request</strong><br />
                        Sorry, there was an error submitting your quote request. Please try again or contact us directly at akjain.ranas@gmail.com.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting Quote Request...' : 'Submit Quote Request'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Quick Response</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  We typically respond to quote requests within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-green-600" />
                  <span>Custom Solutions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  We provide customized formulations and packaging solutions to meet your specific requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span>Expert Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Our technical team is available to provide guidance and support for your applications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-blue-900">📞 Need Immediate Assistance?</h3>
                <p className="text-blue-800 text-sm mb-3">
                  For urgent inquiries, call our sales team directly.
                </p>
                <p className="text-blue-900 font-medium">+91-9999776385</p>
                <p className="text-blue-700 text-sm">vinayak@bellchem.in</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;


