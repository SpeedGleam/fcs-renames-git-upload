
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    
    // Add scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate("/")}
              className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
            >
              Elegance
            </button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all"
            >
              Features
            </a>
            <a 
              href="#showcase" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all"
            >
              Showcase
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all"
            >
              Testimonials
            </a>
          </nav>
          
          <div className="flex items-center">
            <button
              onClick={() => navigate("/contact")}
              className="hidden md:inline-flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
