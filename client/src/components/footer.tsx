import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Chat Interface", href: "#" },
    { name: "Disease Detection", href: "#" },
    { name: "Weather Integration", href: "#" },
    { name: "Price Prediction", href: "#" }
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Training Materials", href: "#" },
    { name: "Community Forum", href: "#" }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5"/>
                </svg>
                <span className="text-xl font-bold text-foreground">Mrittika</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Empowering Indian farmers with AI-driven agricultural intelligence.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-social-twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-social-linkedin"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-social-youtube"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`footer-product-${index}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`footer-support-${index}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>hello@mrittika.ai</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+91 80-4567-8900</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Bangalore, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Mrittika AI. All rights reserved. Made with ❤️ for Indian farmers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
