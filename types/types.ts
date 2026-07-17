export type Message = {
  id: string;
  name: string;
  lastMessage: string;
  isGroup: boolean;
  unreadCount: number;
  muted: boolean;
  online: boolean;
  time: string;
};
