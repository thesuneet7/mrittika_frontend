import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertChatMessageSchema } from "@shared/schema";
import { z } from "zod";

// Mock AI responses for agricultural queries
const mockAIResponses = [
  "मैं आपकी खेती संबंधी समस्या को समझ गया हूँ। आपके क्षेत्र की मिट्टी और मौसम के अनुसार, मैं निम्नलिखित सुझाव देता हूँ...",
  "इस लक्षण के आधार पर, यह फंगल इन्फेक्शन हो सकता है। तुरंत Copper Oxychloride @ 3g/लीटर का छिड़काव करें। सुबह 6-8 बजे स्प्रे करना सबसे अच्छा है।",
  "आपकी फसल की स्थिति के अनुसार, मैं सुझाता हूँ कि आप NPK 19:19:19 @ 2g/लीटर का उपयोग करें। मिट्टी की नमी बनाए रखें और 15 दिन बाद दोबारा जांच करें।",
  "यह मौसम गेहूं की बुआई के लिए उपयुक्त है। आपके क्षेत्र में HD-2967 किस्म सबसे अच्छी रहेगी। बुआई से पहले बीज को कार्बेंडाजिम से उपचारित करें।",
  "टमाटर में यह समस्या आमतौर पर Late Blight के कारण होती है। Metalaxyl + Mancozeb @ 2.5g/लीटर का छिड़काव करें और प्रभावित पत्तियों को हटा दें।"
];

function getRandomAIResponse(): string {
  return mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)];
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat message endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const data = insertChatMessageSchema.parse(req.body);
      
      // Store user message
      const userMessage = await storage.createChatMessage(data);
      
      // Generate AI response after a small delay
      setTimeout(async () => {
        const aiResponse = getRandomAIResponse();
        await storage.createChatMessage({
          sessionId: data.sessionId,
          message: aiResponse,
          isUser: false,
        });
      }, 1000);
      
      res.json(userMessage);
    } catch (error) {
      console.error("Error saving chat message:", error);
      res.status(400).json({ error: "Invalid message data" });
    }
  });

  // Get chat history
  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const messages = await storage.getChatHistory(sessionId);
      res.json(messages);
    } catch (error) {
      console.error("Error fetching chat history:", error);
      res.status(500).json({ error: "Failed to fetch chat history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
