import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const founders = [
  {
    name: "Suneet Maharana",
    title: "Co-founder",
    description: "Senior Undergrad, IIT Kanpur. BCG Summer Intern. Founder & President - Chem Club, IITK. COO, Sangeet Tarang NGO Researcher with 2 publications",
    avatar: "/founders/suneet.webp"
  },
  {
    name: "Chaitanya Goel",
    title: "Co-founder",
    description: "Junior Undergrad, IIT Kanpur. Incoming Accenture Intern. Co-Founder Kaushal Up Foundation NGO National Winner Smart India Hackathon",
    avatar: "/founders/chaitanya.webp"
  },
  {
    name: "Vasudharaje Srivastava",
    title: "Co-founder",
    description: "Senior Undergrad, IIT Kanpur. American Express Intern. Econometrics & Public Policy Researcher",
    avatar: "/founders/vasudha.webp"
  },
  {
    name: "Aditya Mishra",
    title: "Co-founder",
    description: "Senior Undergrad, IIT Kanpur. ARF Summer Intern. Saltmine Intern.", 
    avatar: "/founders/aditya.webp"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {founders.map((founder, index) => (
              <Card key={index} className="shadow-sm" data-testid={`founder-${index}`}>
                <CardContent className="p-6 text-center">
                  <img 
                    src={founder.avatar} 
                    alt={`${founder.name} portrait`}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" 
                  />
                  <h3 className="text-xl font-bold text-foreground mb-1">{founder.name}</h3>
                  <p className="text-muted-foreground mb-2">{founder.title}</p>
                  <p className="text-sm text-muted-foreground mb-3">{founder.description}</p>
                  <div className="flex justify-center space-x-2">
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`founder-linkedin-${index}`}
                    >
                      <Linkedin className="h-4 w-4" />
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

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create an inclusive digital agriculture ecosystem where every farmer has equal access to knowledge and opportunities, making farming sustainable and profitable.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower small and marginal farmers through simple, inclusive SMS/Telegram/Whatsapp/App solutions that deliver timely information on subsidies, insurance, and best practices, reducing crop losses and improving livelihoods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
