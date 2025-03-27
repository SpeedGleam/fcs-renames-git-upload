
import { useEffect } from "react";

const testimonials = [
  {
    quote: "The attention to detail in this design system is remarkable. Every interaction feels intentional and refined.",
    author: "Alex Morgan",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "We've implemented this system across our entire product line and the consistency has transformed our user experience.",
    author: "James Chen",
    role: "CTO, Envision Tech",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The balance of aesthetics and functionality is perfect. It's minimal without sacrificing personality.",
    author: "Sarah Williams",
    role: "UI/UX Lead",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
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
    
    const elements = document.querySelectorAll('.testimonial-card');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-on-scroll animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-heading mb-4">
            What Others Are Saying
          </h2>
          <p className="text-lg text-foreground/80">
            Discover how our design system has elevated products and delighted users.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card opacity-0 bg-background rounded-xl p-8 shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.author}</h3>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                </div>
              </div>
              
              <blockquote>
                <p className="text-foreground/90 italic">"{testimonial.quote}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
