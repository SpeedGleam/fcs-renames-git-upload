
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Elegance</h3>
            <p className="text-foreground/80 max-w-md mb-6">
              A design system that prioritizes simplicity and functionality while maintaining a refined aesthetic that stands the test of time.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Components</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70">
            &copy; {currentYear} Elegance. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
