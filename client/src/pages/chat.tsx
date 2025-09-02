import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, User, Send, Mic, MicOff, Upload, ArrowLeft, Plus, MessageSquare } from "lucide-react";
import { Link } from "wouter";

interface Message {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: string;
}

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const chatSessions = [
    { id: "session1", title: "Tomato pest problem", lastMessage: "2 hours ago" },
    { id: "session2", title: "Wheat harvesting advice", lastMessage: "1 day ago" },
    { id: "session3", title: "Rice crop management", lastMessage: "3 days ago" }
  ];

  // ✅ Scroll chat to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // ✅ Handle sending message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    let messageToSend = message.trim();
    if (selectedFile) {
      messageToSend += ` [Image: ${selectedFile.name}]`;
    }

    const userMsg: Message = {
      id: crypto.randomUUID(),
      message: messageToSend,
      isUser: true,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setSelectedFile(null);
    setIsTyping(true);

    try {
      // ✅ Call backend chatbot API
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await res.json();

      const botMsg: Message = {
        id: crypto.randomUUID(),
        message: data.reply || "⚠️ No response",
        isUser: false,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Error sending message:", err);
    } finally {
      setIsTyping(false);
    }
  };

  // ✅ Handle voice recording toggle
  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      console.log("🎙️ Start recording...");
    } else {
      console.log("🛑 Stop recording...");
    }
  };

  // ✅ Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  // ✅ Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: crypto.randomUUID(),
            message: "नमस्ते! मैं मृत्तिका हूँ। मैं आपकी खेती से जुड़ी समस्याओं में मदद कर सकता हूँ। आप कौन सी फसल उगाते हैं?",
            isUser: false,
            timestamp: new Date().toISOString(),
          },
        ]);
      }, 1000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <Button className="w-full flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            <span>New Chat</span>
          </Button>
        </div>
        
        {/* Chat history */}
        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Recent Chats</h3>
          <div className="space-y-2">
            {chatSessions.map((session) => (
              <div key={session.id} className="p-3 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-start space-x-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{session.title}</p>
                    <p className="text-xs text-muted-foreground">{session.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Bot className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-foreground">Mrittika</span>
          </div>
        </div>
      </div>

      {/* Main chat */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
          <div className="flex-1 overflow-y-auto p-6">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Bot className="text-primary h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Ask anything</h2>
                <p className="text-muted-foreground max-w-md">
                  I'm Mrittika, your AI agricultural assistant. Ask me about crops, diseases, weather, or any farming-related questions.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {msg.isUser ? <User className="text-accent h-5 w-5" /> : <Bot className="text-primary h-5 w-5" />}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-foreground">{msg.isUser ? "You" : "Mrittika"}</span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(msg.timestamp).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
                        </span>
                      </div>
                      <div className="prose prose-sm max-w-none text-foreground">
                        <p>{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="text-primary h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <span className="text-sm font-semibold text-foreground">Mrittika</span>
                      <div className="flex space-x-1 pt-2">
                        <div className="typing-indicator"></div>
                        <div className="typing-indicator"></div>
                        <div className="typing-indicator"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="p-6 border-t border-border">
            {selectedFile && (
              <div className="mb-4 p-3 bg-muted rounded-lg flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Selected: {selectedFile.name}</span>
                <Button size="sm" variant="ghost" onClick={() => setSelectedFile(null)}>
                  Remove
                </Button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex items-end space-x-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Button type="button" size="sm" variant={isRecording ? "destructive" : "outline"} onClick={handleVoiceToggle}>
                    {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>

                  <Button type="button" size="sm" variant="outline" onClick={() => fileInputRef.current?.click()}>
                    <Upload className="h-4 w-4" />
                  </Button>

                  <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
                </div>

                <div className="relative">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask anything about farming..."
                    className="pr-12 py-3 text-base rounded-xl border-2 focus:border-primary"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    disabled={!message.trim()}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </form>

            <p className="text-xs text-muted-foreground mt-3 text-center">
              Mrittika can make mistakes. Check important info and consult local experts for critical decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
