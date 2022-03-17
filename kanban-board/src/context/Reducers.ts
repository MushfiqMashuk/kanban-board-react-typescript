import {
  ADD_TITLE,
  ADD_TODO,
  DELETE_CARD,
  DELETE_TODO,
  UPDATE_TODO,
} from "./ActionTypes";
import { ActionType, StateProps } from "./Interfaces";

export const CardReducer = (
  state: StateProps,
  action: ActionType
): StateProps => {
  switch (action.type) {
    case ADD_TITLE:
      return {
        ...state,
        titles: [...state.titles, action.payload],
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.todoId !== action.payload),
      };
    case DELETE_CARD:
      return {
        ...state,
        titles: state.titles.filter(
          (title) => title.titleId !== action.payload
        ),
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.todoId === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo
        ),
      };

    default:
      return state;
  }
};
