import { ADD_TITLE, ADD_TODO } from "./ActionTypes";
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

    default:
      return state;
  }
};
