import manufacturingFacility from "@/assets/manufacturing-facility.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP HERO SECTION WITH GLASS CARD */}
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
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Bell Chem</span>
            </h2>

            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Established in 1984, Bell Chem has been India's trusted partner in dyes and chemical supplying  
              for over four decades, delivering excellence through innovation and quality.
            </p>
          </div>
        </div>

        
        {/* MAIN CONTENT SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">

          {/* ⭐ ENTIRE LEFT COLUMN NOW A SINGLE GLASS CARD */}
          <div
            className="
              bg-black/30 backdrop-blur-md 
              rounded-2xl border border-white/20 
              shadow-[0_0_25px_rgba(0,0,0,0.3)]
              p-8 space-y-8
            "
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Our Legacy</h3>

              <p className="text-lg text-white leading-relaxed">
                From a modest beginning to becoming one of India's leading chemical supplier and exporter, 
                Bell Chem has consistently evolved with changing industry demands while maintaining 
                our commitment to quality and sustainability.
              </p>
              
              <div className="space-y-6">

                {/* Quality Excellence */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-white">Quality Excellence</h4>
                    <p className="text-white/90">
                      Rigorous multi-stage quality checks with verified supplier networks<br/>
                      Consistent sourcing standards to ensure purity, performance, and batch reliability<br/>
                      Compliance with global documentation and export requirements
                    </p>
                  </div> 
                </div>

                {/* Environmental Responsibility */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-white">Environmental Responsibility</h4>
                    <p className="text-white/90">
                      Eco-friendly production methods with zero liquid discharge<br/>
                      Commitment to minimizing environmental impact across our supply chain
                    </p>
                  </div>
                </div>

                {/* Innovation Focus */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-white">Innovation Focus</h4>
                    <p className="text-white/90">
                      Customer-centric solutions tailored to textile, chemical, and industrial segments<br/>
                      Continuous expansion of our product portfolio based on industry needs
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* IMAGE COLUMN (unchanged) */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-professional">
              <img 
                src={manufacturingFacility}
                alt="Bell Chem modern manufacturing facility with advanced equipment"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Statistics Section (unchanged) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Products</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600 font-medium">Satisfied Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-gray-600 font-medium">Quality Assurance</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">40+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
