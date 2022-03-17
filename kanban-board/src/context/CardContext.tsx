import { createContext, useContext, useReducer } from "react";
import { PropType, StateProps, ValueType } from "./Interfaces";
import { CardReducer } from "./Reducers";

const initialState: StateProps = {
  titles: [],
  todos: [],
};

const Card = createContext<ValueType | null>(null);

const Context = ({ children }: PropType) => {
  const [state, dispatch] = useReducer(CardReducer, initialState);

  return <Card.Provider value={{ state, dispatch }}>{children}</Card.Provider>;
};

export default Context;

export const CardContext = () => {
  return useContext(Card);
};
