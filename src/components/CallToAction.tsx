
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Transform Your Design Experience?
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-10">
            Join thousands of designers and developers who have elevated their projects with our design system.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full sm:w-auto bg-background text-foreground px-8 py-3 rounded-md font-medium border border-border hover:bg-secondary/50 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
