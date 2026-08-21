export interface Message {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  isStreaming?: boolean;
  timestamp: number;
}

export interface GuardResult {
  isRelevant: boolean;
  reason?: string;
}

export enum ConnectionStatus {
  IDLE = 'IDLE',
  CONNECTING = 'CONNECTING',
  STREAMING = 'STREAMING',
  ERROR = 'ERROR',
}