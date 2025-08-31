import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-0">
            <img src="/image-2-2.png" alt="Mrittika Logo" className="h-10 w-auto" />
            <span className="absolute left-44 text-xl font-bold text-foreground"></span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-how-it-works"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-reviews"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('founders')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-founders"
            >
              Team
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
            
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="mobile-nav-how-it-works"
              >
                How it Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="mobile-nav-pricing"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="mobile-nav-reviews"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('founders')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="mobile-nav-founders"
              >
                Team
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
