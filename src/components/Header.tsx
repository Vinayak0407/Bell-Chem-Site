import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/20f50eae-d19f-4dcb-949b-a5e4ef9f76aa.png" 
                alt="Bell Chem Logo" 
                className="w-12 h-12"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (target.src.indexOf('/placeholder.svg') === -1) {
                    target.src = '/placeholder.svg';
                  }
                }}
              />
              <h1 className="text-2xl font-bold text-primary">
                Bell Chem
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-primary hover:text-primary/90 transition-colors font-medium">
              About Us
            </Link>
            <Link to="/products" className="text-primary hover:text-primary/90 transition-colors font-medium">
              Products
            </Link>
            <Link to="/industries" className="text-primary hover:text-primary/90 transition-colors font-medium">
              Industries
            </Link>
            <Link to="/contact" className="text-primary hover:text-primary/90 transition-colors font-medium">
              Contact
            </Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link to="/quote">
              <Button variant="default" className="bg-primary hover:bg-primary/90 text-white shadow-elegant px-6">
                Request Quote
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-primary hover:text-primary/90 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-primary hover:text-primary/90 hover:bg-gray-100 rounded-md transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                to="/products"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-primary hover:text-primary/90 hover:bg-gray-100 rounded-md transition-colors font-medium"
              >
                Products
              </Link>
              <Link
                to="/industries"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-primary hover:text-primary/90 hover:bg-gray-100 rounded-md transition-colors font-medium"
              >
                Industries
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-primary hover:text-primary/90 hover:bg-gray-100 rounded-md transition-colors font-medium"
              >
                Contact
              </Link>
              <div className="pt-2">
                <Link to="/quote">
                  <Button 
                    variant="default" 
                    className="w-full bg-primary hover:bg-primary/90 text-white shadow-elegant"
                    onClick={closeMobileMenu}
                  >
                    Request Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;