
import { useEffect, useState } from "react";

const showcaseItems = [
  {
    title: "Natural Aesthetics",
    description: "Interfaces that feel like an extension of reality—intuitive, effortless, and natural.",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Thoughtful Interactions",
    description: "Micro-interactions that delight and guide users through their journey.",
    image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Timeless Typography",
    description: "Typography that balances readability with personality for a lasting impression.",
    image: "https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    // Auto-rotate showcase items
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % showcaseItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.showcase-element');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="showcase" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 showcase-element opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-heading mb-4">
            Showcase
          </h2>
          <p className="text-lg text-foreground/80">
            Discover how our design principles come to life through these carefully crafted examples.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 showcase-element opacity-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img 
                src={showcaseItems[activeIndex].image} 
                alt={showcaseItems[activeIndex].title}
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {showcaseItems[activeIndex].title}
                </h3>
                <p className="text-white/90">
                  {showcaseItems[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 showcase-element opacity-0">
            <h3 className="text-2xl font-bold mb-6">Design Philosophy</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-medium mb-2">Simplicity in Action</h4>
                <p className="text-foreground/80">
                  We believe that truly great design disappears, letting the content and functionality take center stage. Our approach strips away the unnecessary to focus on what truly matters.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-medium mb-2">Attention to Detail</h4>
                <p className="text-foreground/80">
                  The difference between good and great lies in the details. Every pixel, every interaction, and every transition has been carefully considered and refined.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-medium mb-2">User-Centered Focus</h4>
                <p className="text-foreground/80">
                  Our design decisions are driven by how they enhance the user experience. We continuously test and refine to ensure intuitive, accessible interfaces.
                </p>
              </div>
            </div>
            
            <div className="flex mt-8 space-x-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex 
                      ? "bg-primary" 
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`View showcase item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
