import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    title: "Ask Your Question",
    description: "Type or speak your farming question in any language. Include details like crop type, location, and current conditions."
  },
  {
    number: 2,
    title: "AI Analysis",
    description: "Our AI analyzes your question using hyperlocal data, weather conditions, and agricultural best practices for your region."
  },
  {
    number: 3,
    title: "Get Expert Advice",
    description: "Receive detailed, actionable advice including treatment options, timing, dosage, and cost estimates."
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Mrittika Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple 3-step process to get expert agricultural advice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <Card className="shadow-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-primary-foreground font-bold text-xl">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-primary h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
