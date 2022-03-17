import {
  ADD_TITLE,
  ADD_TODO,
  DELETE_CARD,
  DELETE_TODO,
  UPDATE_TODO,
} from "./ActionTypes";
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

export const DeleteTodoAction = (payload: number): ActionType => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const DeleteCardAction = (payload: number): ActionType => {
  return {
    type: DELETE_CARD,
    payload,
  };
};

export const UpdateTodoAction = (payload: {
  title: string;
  id: number;
}): ActionType => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};
