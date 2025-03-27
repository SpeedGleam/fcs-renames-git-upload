
import { useEffect } from "react";
import { Layers, Zap, Shield, Users, Sparkles, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Layers className="w-8 h-8 mb-5 text-primary" />,
    title: "Modular Components",
    description: "Build interfaces with reusable, self-contained components that maintain consistency throughout your project."
  },
  {
    icon: <Zap className="w-8 h-8 mb-5 text-primary" />,
    title: "Lightning Fast",
    description: "Optimized for speed and performance, ensuring your users experience smooth interactions at every touchpoint."
  },
  {
    icon: <Shield className="w-8 h-8 mb-5 text-primary" />,
    title: "Secure by Default",
    description: "Built with security best practices to protect your data and your users' privacy at every layer."
  },
  {
    icon: <Users className="w-8 h-8 mb-5 text-primary" />,
    title: "User-Centric",
    description: "Designed with real user needs in mind, creating intuitive experiences that feel natural and effortless."
  },
  {
    icon: <Sparkles className="w-8 h-8 mb-5 text-primary" />,
    title: "Aesthetically Refined",
    description: "Crafted with attention to visual detail, bringing a touch of elegance to every interaction and element."
  },
  {
    icon: <BarChart3 className="w-8 h-8 mb-5 text-primary" />,
    title: "Data Informed",
    description: "Enhanced with analytics capabilities that provide insights to continuously improve your product."
  }
];

const Features = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.feature-card');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-heading mb-4">
            Thoughtfully Crafted Features
          </h2>
          <p className="text-lg text-foreground/80">
            Every detail has been considered to create a system that's both beautiful and functional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card opacity-0 bg-background rounded-xl p-8 shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
