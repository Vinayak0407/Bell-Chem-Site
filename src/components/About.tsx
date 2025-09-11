const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over a decade of experience, we've helped hundreds of companies transform 
              their operations and achieve unprecedented growth. Our team of experts combines 
              strategic thinking with hands-on execution to deliver results that matter.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-primary p-8 rounded-2xl shadow-elegant">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To empower businesses with innovative solutions that drive sustainable growth, 
                foster innovation, and create lasting value for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;