import { SET_NEW_MESSAGE } from "../constants";

import { ActionType, MessageType } from "../types";

export const setNewMessage = (
  payload: MessageType
): ActionType<MessageType> => {
  return {
    payload,
    type: SET_NEW_MESSAGE,
  };
};
