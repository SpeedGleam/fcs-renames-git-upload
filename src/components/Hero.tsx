
import { useEffect, useRef } from "react";
import { ArrowDownIcon } from "lucide-react";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTYwIDM0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0tMjggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptLTI4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTM2IDZjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTYwIDZjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTMyIDZjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTQgNmMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMzIgMjJjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTYwIDI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0tMjggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptLTI4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 z-0"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <span className="inline-block animate-on-scroll opacity-0 animate-fade-in animation-delay-200 px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground mb-6">
          Crafted with precision
        </span>
        
        <h1 
          ref={headingRef}
          className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight gradient-heading mb-6"
        >
          Minimal Design,
          <br />
          <span className="relative">
            Maximum Impact
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full transform origin-left"></span>
          </span>
        </h1>
        
        <p className="animate-on-scroll opacity-0 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10 animate-fade-in animation-delay-400">
          Experience the perfect balance of form and function with our thoughtfully crafted design system that elevates your digital presence.
        </p>
        
        <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-600">
          <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Get Started
          </button>
          
          <button className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary/80 transition-all">
            Learn More
          </button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <button 
            onClick={scrollToFeatures}
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDownIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
