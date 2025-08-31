import { mockApi } from './mockApi';
import type { ChatMessage } from '@/types/chat';

// Frontend-only API client using mock responses
export const apiClient = {
  async sendMessage(sessionId: string, message: string): Promise<ChatMessage> {
    return await mockApi.sendMessage(sessionId, message);
  },

  async getChatHistory(sessionId: string): Promise<ChatMessage[]> {
    return await mockApi.getChatHistory(sessionId);
  },
};
