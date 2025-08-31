import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, User, Send } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import type { ChatMessage } from "@/types/chat";

export default function ChatInterface() {
  const [message, setMessage] = useState("");
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  // Fetch chat history
  const { data: messages = [] } = useQuery<ChatMessage[]>({
    queryKey: ['chat', sessionId],
    queryFn: () => apiClient.getChatHistory(sessionId),
    refetchInterval: 2000, // Poll for new messages
  });

  // Send message mutation
  const sendMessageMutation = useMutation({
    mutationFn: async (messageText: string) => {
      return await apiClient.sendMessage(sessionId, messageText);
    },
    onSuccess: () => {
      setMessage("");
      setIsTyping(true);
      queryClient.invalidateQueries({ queryKey: ['chat', sessionId] });
      
      // Stop typing indicator after 3 seconds
      setTimeout(() => {
        setIsTyping(false);
        queryClient.invalidateQueries({ queryKey: ['chat', sessionId] });
      }, 3000);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !sendMessageMutation.isPending) {
      sendMessageMutation.mutate(message.trim());
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial greeting message
  useEffect(() => {
    if (messages.length === 0) {
      setTimeout(() => {
        sendMessageMutation.mutate("नमस्ते! मैं मृत्तिका हूँ। मैं आपकी खेती से जुड़ी समस्याओं में मदद कर सकता हूँ। आप कौन सी फसल उगाते हैं?");
      }, 1000);
    }
  }, []);

  return (
    <Card className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
      {/* Chat Header */}
      <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <Bot className="text-primary-foreground h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Mrittika AI</h3>
            <p className="text-primary-foreground/80 text-sm">Your Agricultural Assistant</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-primary-foreground/80">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-sm">Online</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-muted/30">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start space-x-3 chat-bubble ${
              msg.isUser ? 'justify-end' : ''
            }`}
          >
            {!msg.isUser && (
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="text-primary-foreground text-sm h-4 w-4" />
              </div>
            )}
            <div
              className={`rounded-lg p-3 max-w-md shadow-sm ${
                msg.isUser
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border'
              }`}
            >
              <p className={`text-sm ${msg.isUser ? 'text-primary-foreground' : 'text-card-foreground'}`}>
                {msg.message}
              </p>
              <span className={`text-xs mt-1 block ${
                msg.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
              }`}>
                {new Date(msg.createdAt).toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                })}
              </span>
            </div>
            {msg.isUser && (
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <User className="text-accent-foreground text-sm h-4 w-4" />
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="text-primary-foreground text-sm h-4 w-4" />
            </div>
            <div className="bg-card border border-border rounded-lg p-3 shadow-sm">
              <div className="flex space-x-1">
                <div className="typing-indicator"></div>
                <div className="typing-indicator"></div>
                <div className="typing-indicator"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <CardContent className="p-4 border-t border-border bg-background">
        <form onSubmit={handleSubmit} className="flex space-x-3">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="अपना सवाल यहाँ लिखें... (Type your question here...)"
            className="flex-1"
            disabled={sendMessageMutation.isPending}
            data-testid="input-chat-message"
          />
          <Button
            type="submit"
            disabled={!message.trim() || sendMessageMutation.isPending}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-testid="button-send-message"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          AI can make mistakes. Always consult local agricultural experts for critical decisions.
        </p>
      </CardContent>
    </Card>
  );
}
