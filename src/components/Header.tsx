import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/20f50eae-d19f-4dcb-949b-a5e4ef9f76aa.png" 
                alt="Bell Chem Logo" 
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold text-primary">
                Bell Chem
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <a href="#products" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Products
            </a>
            <a href="#industries" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Industries
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>
          
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-white shadow-elegant px-6">
            Request Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;