import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export default function CTASection() {
  const scrollToChat = () => {
    const chatElement = document.getElementById('chat-interface');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gradient-bg rounded-3xl p-12 text-black">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Farming?</h2>
            <p className="text-xl mb-8 text-black/90">
              Join thousands of farmers already using Mrittika to increase their yields and profits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToChat}
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/20 transition-colors font-semibold text-lg"
                data-testid="button-cta-start-chat"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Try Mrittika Now
              </Button>
              <Button
                variant="outline"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/20 transition-colors font-semibold text-lg"
                data-testid="button-cta-schedule-demo"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
