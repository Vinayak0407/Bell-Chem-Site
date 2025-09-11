const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              YourCompany
            </h3>
            <p className="text-background/80 leading-relaxed max-w-md">
              Transforming businesses through innovation, strategy, and expert execution. 
              Your success is our mission.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;