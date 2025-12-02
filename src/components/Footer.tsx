import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/20f50eae-d19f-4dcb-949b-a5e4ef9f76aa.png" 
                alt="Bell Chem Logo" 
                className="w-16 h-16"
              />
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Bell Chem
              </h3>
            </Link>

            <p className="text-background/80 leading-relaxed max-w-md">
              Leading supplier of premium chemicals and industrial dyes. 
              Committed to quality, reliability, and customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/about" className="hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-background transition-colors">Products</Link></li>
              <li><Link to="/industries" className="hover:text-background transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect / Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-background/80">

              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/company/bellchem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  LinkedIn
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:vinayak@bellchem.in"
                  className="hover:text-background transition-colors"
                >
                  Email: vinayak@bellchem.in
                </a>
              </li>

              {/* Address */}
              <li className="hover:text-background transition-colors">
                Ground Floor, Godown No.198,<br />
                Tilak Bazar, Khari Baoli<br />
                New Delhi, Central Delhi
              </li>

            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; Bell Chem(A.K Jain and Co Enterprise). All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
