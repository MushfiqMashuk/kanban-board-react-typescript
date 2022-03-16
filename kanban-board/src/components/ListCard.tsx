import React, { useState } from "react";
import { CardContext } from "../context/CardContext";
import Delete from "../delete.svg";
import styles from "../styles/ListCard.module.css";
import Button from "./Button";
import Form from "./Form";
import TodoCard from "./TodoCard";

interface Props {
  card: {
    title: string;
  };
}

const ListCard = ({ card }: Props) => {
  const [addTodo, setAddTodo] = useState<boolean>(false);
  const titleId = card.titleId;

  const stateProps = CardContext();
  const state = stateProps?.state;
  //const dispatch = stateProps?.dispatch;

  const handleClick = () => {
    setAddTodo(!addTodo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card_header}>
        <h3>{card?.title}</h3>
        <img src={Delete} alt="delete" className={styles.delete_logo} />
      </div>
      {state?.todos.length > 0 &&
        state?.todos.map((todo, index) => todo.cardId === titleId && <TodoCard text={todo.title} key={index}/>)}
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
  );
};

export default ListCard;
