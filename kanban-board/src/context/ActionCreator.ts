import { ADD_TITLE, ADD_TODO } from "./ActionTypes";
import { ActionType } from "./Interfaces";

export const AddTitleAction = (payload: object): ActionType => {
  return {
    type: ADD_TITLE,
    payload,
  };
};

export const AddTodoAction = (payload: object): ActionType => {
  return {
    type: ADD_TODO,
    payload,
  };
};
