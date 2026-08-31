import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Industries", path: "/industries" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo — site-wide, not the page H1 */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/lovable-uploads/20f50eae-d19f-4dcb-949b-a5e4ef9f76aa.png"
              alt="Bell Chem Logo"
              className="w-12 h-12 transition-transform duration-300 group-hover:scale-105"
            />

            <div>
              <span className="block text-2xl font-bold text-primary leading-tight">
                Bell Chem
              </span>
              <span className="block text-sm text-primary/70 -mt-1">
                An A.K Jain & Co Enterprise
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative font-medium py-1 transition-colors ${
                    isActive ? "text-primary" : "text-primary/80 hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/quote">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 transition-transform hover:scale-[1.03]">
                Request Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden p-2 rounded-md text-primary hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-200 bg-white">
            <nav className="py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 text-primary hover:bg-gray-100 rounded transition-colors"
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
        </div>

      </div>
    </header>
  );
};

export default Header;
