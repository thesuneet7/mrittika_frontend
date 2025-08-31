import { Languages, MapPin, Clock, Leaf, CloudSun, Smartphone } from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Chat in Hindi, English, or 15+ regional languages. Get advice in your preferred language."
  },
  {
    icon: MapPin,
    title: "Hyperlocal Intelligence",
    description: "Trained on region-specific data including soil types, weather patterns, and local crop varieties."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Get instant answers anytime. No need to wait for extension officers or expert consultations."
  },
  {
    icon: Leaf,
    title: "Crop-Specific Advice",
    description: "Specialized knowledge for rice, wheat, cotton, sugarcane, and 50+ other crops commonly grown in India."
  },
  {
    icon: CloudSun,
    title: "Weather Integration",
    description: "Real-time weather data and forecasts integrated with farming recommendations for your exact location."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized for smartphones with offline capability and minimal data usage for rural areas."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Mrittika?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for Indian agriculture with deep understanding of local farming practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6" data-testid={`feature-${index}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
