import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";
import ChatInterface from "./chat-interface";
import { Link } from "wouter";

export default function HeroSection() {
  const scrollToChat = () => {
    const chatElement = document.getElementById('chat-interface');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background via-secondary/20 to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Revolutionizing <span className="text-primary">Agriculture</span> with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get instant, hyperlocal agricultural advice in your language. Trained specifically for Indian farming conditions and practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/chat">  
                <Button 
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
                  data-testid="button-start-chatting"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Chatting
                </Button>
              </Link>  
              <Button 
                variant="outline"
                className="border border-border text-foreground px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-semibold text-lg"
                data-testid="button-watch-demo"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div id="chat-interface">
            <ChatInterface />
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Try asking: "मेरी टमाटर की फसल में कीड़े लग गए हैं" or "Weather forecast for wheat harvesting"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
