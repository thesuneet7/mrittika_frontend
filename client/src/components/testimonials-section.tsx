import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "मृत्तिका ने मेरी धान की फसल को बचाया। सही समय पर सलाह मिली और 30% ज्यादा उत्पादन हुआ।",
    name: "राजेश कुमार",
    title: "Rice Farmer, Punjab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    rating: 5,
    text: "Disease detection is amazing! Got exact treatment for my cotton crop's pest problem. Saved thousands of rupees.",
    name: "Priya Sharma",
    title: "Cotton Farmer, Gujarat",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    rating: 5,
    text: "गेहूं की किस्म चुनने में बहुत मदद मिली। Local variety के बारे में सही जानकारी दी।",
    name: "सुरेश चौधरी",
    title: "Wheat Farmer, UP",
    avatar: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=100&h=100&fit=crop&crop=face"
  }
];

const stats = [
  { value: "10,000+", label: "Active Farmers" },
  { value: "25+", label: "States Covered" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "24/7", label: "Support Available" }
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by 10,000+ Farmers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Mrittika is helping farmers across India increase their yields and profits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-sm" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                  </div>
                  <p className="text-card-foreground mb-4">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={`${testimonial.name} testimonial`}
                      className="w-12 h-12 rounded-full object-cover mr-3" 
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} data-testid={`stat-${index}`}>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
