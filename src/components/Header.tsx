import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/20f50eae-d19f-4dcb-949b-a5e4ef9f76aa.png" 
                alt="Bell Chem Logo" 
                className="w-10 h-10"
              />
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Bell Chem
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#industries" className="text-foreground hover:text-primary transition-colors">
              Industries
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <Button variant="default" className="shadow-elegant">
            Request Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;