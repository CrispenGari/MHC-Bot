import { SET_NEW_MESSAGE } from "../../constants";

import { ActionType, MessageType } from "../../types";

export const messagesReducer = (
  messages: MessageType[] = [],
  { type, payload }: ActionType<MessageType>
) => {
  switch (type) {
    case SET_NEW_MESSAGE:
      return (messages = [...messages, payload]);
    default:
      return messages;
  }
};
