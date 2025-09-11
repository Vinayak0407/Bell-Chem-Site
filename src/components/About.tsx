const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Bell Chem</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established chemical manufacturer specializing in high-quality industrial chemicals 
              and dyes. With decades of experience, we serve major textile mills, pharmaceutical 
              companies, and manufacturing industries across India with reliable, cost-effective solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Products Manufactured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Quality Assurance</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-primary p-8 rounded-2xl shadow-elegant">
              <h3 className="text-2xl font-bold text-white mb-4">Our Commitment</h3>
              <p className="text-white/90 leading-relaxed">
                To deliver superior quality chemicals and dyes that meet international standards, 
                ensuring consistent supply, competitive pricing, and exceptional customer service 
                for sustainable business partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;