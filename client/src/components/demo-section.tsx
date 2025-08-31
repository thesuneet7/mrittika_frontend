import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function DemoSection() {
  const handlePlayDemo = () => {
    // TODO: Implement video modal or redirect to demo video
    alert('Demo video would play here');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See Mrittika in Action</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Watch how farmers are using AI to solve real agricultural challenges
          </p>
          
          <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=675&fit=crop" 
              alt="Agricultural landscape demo video" 
              className="w-full h-64 md:h-96 object-cover" 
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Button
                onClick={handlePlayDemo}
                className="w-20 h-20 bg-primary rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg p-0"
                data-testid="button-play-demo"
              >
                <Play className="text-primary-foreground h-8 w-8 ml-1" />
              </Button>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-background/90 backdrop-blur rounded-lg p-3">
                <p className="text-sm font-semibold text-foreground">
                  5 Min Demo: Cotton Disease Diagnosis & Treatment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
