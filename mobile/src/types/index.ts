export interface ActionType<T> {
  payload: T;
  type: string;
}

export interface StateType {
  messages: MessageType[];
}

export interface MessageType {
  message: string;
  sender: "bot" | "human";
}
