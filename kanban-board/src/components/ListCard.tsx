import React, { useState } from "react";
import { DeleteCardAction } from "../context/ActionCreator";
import { CardContext } from "../context/CardContext";
import Delete from "../delete.svg";
import styles from "../styles/ListCard.module.css";
import Button from "./Button";
import Form from "./Form";
import TodoCard from "./TodoCard";

interface Props {
  card: {
    title: string;
    titleId: number;
  };
}

const ListCard = ({ card }: Props) => {
  const [addTodo, setAddTodo] = useState<boolean>(false);
  const titleId = card.titleId;

  const stateProps = CardContext();
  const state = stateProps?.state;
  const dispatch = stateProps?.dispatch;

  const handleClick = () => {
    setAddTodo(!addTodo);
  };

  const handleDragOver = (e, titleId) => {
    e.preventDefault();
    console.log(titleId);
  };

  const handleDelete = () => {
    dispatch(DeleteCardAction(titleId));
    console.log(state);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card_header}>
        <h3>{card?.title}</h3>
        <img
          src={Delete}
          alt="delete"
          className={styles.delete_logo}
          onClick={() => handleDelete()}
        />
      </div>
      <div
        className={styles.card_body}
        onDragOver={(e) => handleDragOver(e, titleId)}
      >
        {state?.todos.length > 0 &&
          state?.todos.map(
            (todo, index) =>
              todo.cardId === titleId && (
                <TodoCard text={todo.title} key={index} todoId={todo.todoId} />
              )
          )}
        {addTodo ? (
          <Form handleClick={handleClick} titleId={titleId} />
        ) : (
          <div className={styles.button_container}>
            <Button handleClick={handleClick} style={{ marginLeft: "0px" }}>
              + Add a card
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListCard;
