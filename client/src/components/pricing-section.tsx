import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "month",
    popular: false,
    features: [
      "5 questions per day",
      "Basic crop advice",
      "Weather updates",
      "Hindi & English support"
    ]
  },
  {
    name: "Standard",
    price: "₹19",
    period: "month",
    popular: true,
    features: [
      "Unlimited questions",
      "Advanced crop advice",
      "Disease identification",
      "Price prediction",
      "15+ regional languages",
      "Priority support"
    ]
  },
  {
    name: "Pro",
    price: "₹49",
    period: "month",
    popular: false,
    features: [
      "Everything in Standard",
      "Farm management tools",
      "Satellite imagery analysis",
      "Expert consultation calls",
      "Custom reports",
      "API access"
    ]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Farmer-Friendly Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Affordable plans designed for every farmer, from small holdings to large operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`shadow-sm relative ${plan.popular ? 'border-2 border-primary shadow-lg' : ''}`}
                data-testid={`pricing-plan-${index}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-card-foreground">
                        <Check className="text-primary mr-3 h-4 w-4 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'border border-border text-foreground hover:bg-secondary'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    data-testid={`button-select-plan-${index}`}
                  >
                    {plan.name === "Free" ? "Start Free" : `Start ${plan.name} Plan`}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Special launch offer: 50% off first 3 months</p>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              Need a custom plan for your organization? Contact us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
