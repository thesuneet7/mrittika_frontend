// Mock API responses for frontend-only deployment
// This provides realistic AI responses without any backend

import type { ChatMessage } from "@/types/chat";

// Mock AI responses for agricultural queries
const mockAIResponses = [
  "इस मौसम में कीटों से बचाव के लिए नीम का तेल @ 2ml/लीटर पानी में मिलाकर छिड़काव करें। यह प्राकृतिक और सुरक्षित तरीका है।"
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
