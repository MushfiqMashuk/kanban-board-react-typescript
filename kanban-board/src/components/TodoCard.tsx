import React from "react";
import styles from "../styles/TodoCard.module.css";

interface TodoProps {
  text: string;
}

const TodoCard = ({ text }: TodoProps) => {
  return <div className={styles.container}>{text}</div>;
};

export default TodoCard;
