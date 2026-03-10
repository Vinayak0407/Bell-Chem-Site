import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/20f50eae-d19f-4dcb-949b-a5e4ef9f76aa.png"
              alt="Bell Chem Logo"
              className="w-12 h-12"
            />

            <div>
              <h1 className="text-2xl font-bold text-primary leading-tight">
                Bell Chem
              </h1>
              <p className="text-sm text-primary/70 -mt-1">
                An A.K Jain & Co Enterprise
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="font-medium text-primary hover:text-primary/90">
              About Us
            </Link>
            <Link to="/products" className="font-medium text-primary hover:text-primary/90">
              Products
            </Link>
            <Link to="/industries" className="font-medium text-primary hover:text-primary/90">
              Industries
            </Link>
            <Link to="/contact" className="font-medium text-primary hover:text-primary/90">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/quote">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6">
                Request Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-primary hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="py-3 space-y-1">

              {[
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Industries", path: "/industries" },
                { name: "Contact", path: "/contact" }
              ].map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 text-primary hover:bg-gray-100 rounded"
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-4 pt-2">
                <Link to="/quote" onClick={closeMobileMenu}>
                  <Button className="w-full bg-primary text-white">
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
