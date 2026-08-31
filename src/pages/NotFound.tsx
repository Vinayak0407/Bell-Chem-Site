import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      {/* Prevent 404 pages from being indexed */}
      <SEO
        title="404 – Page Not Found | BellChem"
        description="The page you are looking for does not exist or has been moved."
        noIndex
      />

      <Header />

      <div className="flex min-h-[70vh] items-center justify-center bg-muted/30 px-6">
        <div className="text-center animate-in fade-in zoom-in-95 duration-500">
          <div className="text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            404
          </div>

          <h1 className="mb-3 text-2xl font-semibold text-foreground">
            Page Not Found
          </h1>

          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <Link to="/">
            <Button size="lg" className="shadow-elegant">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
