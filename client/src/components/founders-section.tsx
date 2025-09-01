import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const founders = [
  {
    name: "Arjun Patel",
    title: "Co-founder & CEO",
    description: "Former AI Research at Google. MS Computer Science IIT Delhi. 8 years in agricultural technology.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Dr. Priya Desai",
    title: "Co-founder & CTO",
    description: "PhD Agricultural Sciences IARI. Former Lead Scientist at ICRISAT. 12 years in crop research and AI applications.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Vikram Singh",
    title: "Head of Operations",
    description: "MBA IIMA. Former McKinsey consultant. Expertise in rural market penetration and farmer engagement strategies.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Vikram Singh",
    title: "Head of Operations",
    description: "MBA IIMA. Former McKinsey consultant. Expertise in rural market penetration and farmer engagement strategies.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
  }
];

export default function FoundersSection() {
  return (
    <section id="founders" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet the Founders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A team of technologists and agricultural experts passionate about empowering Indian farmers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {founders.map((founder, index) => (
              <Card key={index} className="shadow-sm" data-testid={`founder-${index}`}>
                <CardContent className="p-8 text-center">
                  <img 
                    src={founder.avatar} 
                    alt={`${founder.name} portrait`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
                  />
                  <h3 className="text-xl font-bold text-foreground mb-2">{founder.name}</h3>
                  <p className="text-muted-foreground mb-3">{founder.title}</p>
                  <p className="text-sm text-muted-foreground mb-4">{founder.description}</p>
                  <div className="flex justify-center space-x-3">
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`founder-linkedin-${index}`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`founder-twitter-${index}`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We believe every farmer deserves access to expert agricultural knowledge. By combining cutting-edge AI with deep agricultural expertise, 
                we're democratizing farming wisdom to help increase yields, reduce costs, and build sustainable agricultural practices across India.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
