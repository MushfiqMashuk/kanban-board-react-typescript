import { createContext, useReducer } from "react";
import { StateProps } from "./Interfaces";
import { CardReducer } from "./Reducers";

const Card = createContext(null);

const initialState: StateProps = {
  card: false,
  titles: [],
  todos: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(CardReducer, initialState);
};

export default Context;
