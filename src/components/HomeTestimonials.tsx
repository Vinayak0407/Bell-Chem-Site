import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const HomeTestimonials = () => {
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
    }
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ⭐ GLASS BOX FOR HEADING + SUBHEADING */}
        <div className="text-center mb-16">
          <div
            className="
              max-w-3xl mx-auto px-10 py-8
              bg-black/30 backdrop-blur-md
              border border-white/20
              rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.3)]
              space-y-4
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
            </h2>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Don't just take our word for it. Here's what industry leaders say about our products and services.
            </p>
          </div>
        </div>

        {/* ⭐ TESTIMONIAL CARDS — UNCHANGED */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ⭐ TRUST INDICATORS INSIDE GLASS BOX */}
<div className="text-center mt-12">
  <div
    className="
      max-w-4xl mx-auto px-10 py-8
      bg-black/30 backdrop-blur-md
      border border-white/20
      rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.3)]
    "
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">

      <div className="text-center">
        <div className="text-2xl font-bold text-white mb-2">5000+</div>
        <div className="text-sm text-white/80">Happy Clients</div>
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold text-white mb-2">98%</div>
        <div className="text-sm text-white/80">Satisfaction Rate</div>
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold text-white mb-2">Quality</div>
        <div className="text-sm text-white/80">Assurance</div>
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold text-white mb-2">40+</div>
        <div className="text-sm text-white/80">Years Experience</div>
      </div>

    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default HomeTestimonials;
