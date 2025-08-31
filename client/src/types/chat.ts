export interface ChatMessage {
  id: string;
  sessionId: string;
  message: string;
  isUser: boolean;
  createdAt: string;
}
