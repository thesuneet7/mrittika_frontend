// Mock API responses for frontend-only deployment
// This provides realistic AI responses without any backend

import type { ChatMessage } from "@/types/chat";

// Mock AI responses for agricultural queries
const mockAIResponses = [
  "मैं आपकी खेती संबंधी समस्या को समझ गया हूँ। आपके क्षेत्र की मिट्टी और मौसम के अनुसार, मैं निम्नलिखित सुझाव देता हूँ...",
  "इस लक्षण के आधार पर, यह फंगल इन्फेक्शन हो सकता है। तुरंत Copper Oxychloride @ 3g/लीटर का छिड़काव करें। सुबह 6-8 बजे स्प्रे करना सबसे अच्छा है।",
  "आपकी फसल की स्थिति के अनुसार, मैं सुझाता हूँ कि आप NPK 19:19:19 @ 2g/लीटर का उपयोग करें। मिट्टी की नमी बनाए रखें और 15 दिन बाद दोबारा जांच करें।",
  "यह मौसम गेहूं की बुआई के लिए उपयुक्त है। आपके क्षेत्र में HD-2967 किस्म सबसे अच्छी रहेगी। बुआई से पहले बीज को कार्बेंडाजिम से उपचारित करें।",
  "टमाटर में यह समस्या आमतौर पर Late Blight के कारण होती है। Metalaxyl + Mancozeb @ 2.5g/लीटर का छिड़काव करें और प्रभावित पत्तियों को हटा दें।",
  "आपकी मिट्टी की जांच के अनुसार, pH स्तर 6.5-7.0 के बीच रखना चाहिए। अगर pH कम है तो चूना मिलाएं, अगर ज्यादा है तो जिप्सम का उपयोग करें।",
  "इस मौसम में कीटों से बचाव के लिए नीम का तेल @ 2ml/लीटर पानी में मिलाकर छिड़काव करें। यह प्राकृतिक और सुरक्षित तरीका है।",
  "आपकी फसल में पोषक तत्वों की कमी दिख रही है। मैं सुझाता हूँ कि आप जैविक खाद का उपयोग करें और मिट्टी की नियमित जांच करते रहें।"
];

function getRandomAIResponse(): string {
  return mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)];
}

// Mock storage for chat messages
const mockStorage = new Map<string, ChatMessage[]>();

export const mockApi = {
  async sendMessage(sessionId: string, message: string): Promise<ChatMessage> {
    const userMessage: ChatMessage = {
      id: Math.random().toString(36).substr(2, 9),
      sessionId,
      message,
      isUser: true,
      createdAt: new Date().toISOString(),
    };

    // Store user message
    if (!mockStorage.has(sessionId)) {
      mockStorage.set(sessionId, []);
    }
    mockStorage.get(sessionId)!.push(userMessage);

    // Simulate AI response after delay
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: Math.random().toString(36).substr(2, 9),
        sessionId,
        message: getRandomAIResponse(),
        isUser: false,
        createdAt: new Date().toISOString(),
      };
      mockStorage.get(sessionId)!.push(aiResponse);
    }, 1000);

    return userMessage;
  },

  async getChatHistory(sessionId: string): Promise<ChatMessage[]> {
    return mockStorage.get(sessionId) || [];
  },
};
