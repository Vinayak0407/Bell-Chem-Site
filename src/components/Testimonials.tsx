import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Textile Manufacturing Co.",
      role: "Production Manager",
      content: "Bell Chem has been our trusted partner for over 15 years. Their textile dyes are of exceptional quality and their customer service is outstanding.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Dr. Priya Sharma",
      company: "Pharma Solutions Ltd.",
      role: "R&D Director",
      content: "The pharmaceutical intermediates from Bell Chem meet all our quality standards. Their GMP compliance and documentation are impeccable.",
      rating: 5,
      image: "👩‍🔬"
    },
    {
      name: "Amit Patel",
      company: "Industrial Coatings Inc.",
      role: "Technical Director",
      content: "We've been using Bell Chem's specialty chemicals for our coating applications. The consistency and performance are excellent.",
      rating: 5,
      image: "👨‍🔧"
    },
    {
      name: "Sunita Reddy",
      company: "Leather Works Pvt Ltd",
      role: "Quality Manager",
      content: "Bell Chem's leather processing chemicals have helped us improve our product quality significantly. Highly recommended!",
      rating: 5,
      image: "👩‍💼"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about our products and services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-primary leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-primary">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-primary">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-primary">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">40+</div>
              <div className="text-sm text-primary">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

