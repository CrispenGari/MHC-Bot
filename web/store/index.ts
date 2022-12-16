import { combineReducers, legacy_createStore, Store } from "redux";
import { BotResponse } from "../graphql/generated/graphql";
import { ActionType, MessageType, StateType } from "../types";
import { messagesReducer } from "./messagesReducer";

export const store: Store<
  StateType,
  ActionType<MessageType>
> = legacy_createStore(
  combineReducers({
    messages: messagesReducer,
  })
);
