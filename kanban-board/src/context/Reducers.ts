import { ADD_TITLE } from "./ActionTypes";
import { ActionType, StateProps } from "./Interfaces";

export const CardReducer = (state: StateProps, action: ActionType): StateProps => {
  switch (action.type) {
    case ADD_TITLE:
      return { ...state, titles: [...state.titles, ...action.payload] };

    default:
      return state;
  }
};


