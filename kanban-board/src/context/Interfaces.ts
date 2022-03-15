export interface StateProps {
  card: boolean;
  titles: object[];
  todos: object[];
}


export interface ActionType {
  type: string;
  payload: object[];
}
