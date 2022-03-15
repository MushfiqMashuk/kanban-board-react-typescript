import { createContext, useReducer } from "react";
import { PropType, StateProps, ValueType } from "./Interfaces";
import { CardReducer } from "./Reducers";

const initialState: StateProps = {
  card: false,
  titles: [],
  todos: [],
};

const Card = createContext<ValueType | null>(null);

const CardContext = ({ children }: PropType) => {
  const [state, dispatch] = useReducer(CardReducer, initialState);

  return <Card.Provider value={{ state, dispatch }}>{children}</Card.Provider>;
};

export default CardContext;
