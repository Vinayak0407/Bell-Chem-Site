import manufacturingFacility from "@/assets/manufacturing-facility.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Bell Chem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Established in 1984, Bell Chem has been India's trusted partner in chemical manufacturing 
            for over four decades, delivering excellence through innovation and quality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Our Legacy</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                From a modest beginning to becoming one of India's leading chemical manufacturers, 
                Bell Chem has consistently evolved with changing industry demands while maintaining 
                our commitment to quality and sustainability.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Excellence</h4>
                    <p className="text-gray-600">ISO 9001:2015 certified manufacturing processes ensuring consistent quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Environmental Responsibility</h4>
                    <p className="text-gray-600">Eco-friendly production methods with zero liquid discharge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation Focus</h4>
                    <p className="text-gray-600">State-of-the-art R&D facility for product development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
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

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Products Manufactured</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
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