import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SectionIntro from "@/components/SectionIntro";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Production Manager",
    content: "Bell Chem has been our trusted partner for over 15 years. Their textile dyes are of exceptional quality and their customer service is outstanding.",
    rating: 5,
    image: "👨‍💼"
  },
  {
    name: "Dr. Priya Sharma",
    role: "R&D Director",
    content: "The pharmaceutical intermediates from Bell Chem meet all our quality standards. Their GMP compliance and documentation are impeccable.",
    rating: 5,
    image: "👩‍🔬"
  },
  {
    name: "Amit Patel",
    role: "Technical Director",
    content: "We've been using Bell Chem's specialty chemicals for our coating applications. The consistency and performance are excellent.",
    rating: 5,
    image: "👨‍🔧"
  }
];

const trustStats = [
  { value: "5000+", label: "Happy Clients" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "Quality", label: "Assurance" },
  { value: "40+", label: "Years Experience" },
];

const HomeTestimonials = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionIntro
          title={<>What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span></>}
          description="Don't just take our word for it. Here's what industry leaders say about our products and services."
        />

        <Reveal className="mb-16">
          <Carousel opts={{ align: "start", loop: true }} className="px-1">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="card-shimmer group h-full border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-4xl mr-3">{testimonial.image}</div>
                        <div>
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <p className="text-muted-foreground leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </Reveal>

        <Reveal className="text-center">
          <div className="max-w-4xl mx-auto px-10 py-10 bg-gradient-hero rounded-2xl shadow-professional">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {trustStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white mb-2"><CountUp value={stat.value} /></div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default HomeTestimonials;
