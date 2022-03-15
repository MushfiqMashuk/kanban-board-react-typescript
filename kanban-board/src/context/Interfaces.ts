import { ReactNode } from "react";

export interface StateProps {
  card: boolean;
  titles: object[];
  todos: object[];
}

export interface ActionType {
  type: string;
  payload: object;
}

export interface ValueType {
  state: StateProps;
  dispatch: React.Dispatch<ActionType>;
}

export interface PropType {
  children: ReactNode;
}
