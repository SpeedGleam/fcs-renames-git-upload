
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30">
      <div className="text-center px-4 sm:px-6 max-w-md">
        <h1 className="text-9xl font-bold text-primary/40 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg text-foreground/70 mb-8">
          We couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors gap-2"
        >
          <ArrowLeft size={16} />
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
