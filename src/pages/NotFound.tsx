import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

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
      {/* 🚫 Prevent 404 pages from being indexed */}
      <SEO
        title="404 – Page Not Found | BellChem"
        description="The page you are looking for does not exist or has been moved."
        noIndex
      />

      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center px-6">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">404</h1>

          <p className="mb-6 text-lg text-gray-600">
            Oops! The page you’re looking for doesn’t exist.
          </p>

          {/* ✅ HashRouter-safe navigation */}
          <Link
            to="/"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
