import React, { useState } from "react";
import { AddTodoAction } from "../context/ActionCreator";
import { CardContext } from "../context/CardContext";
import styles from "../styles/Form.module.css";
import TextArea from "./TextArea";

interface FormProps {
  handleClick(): void;
  titleId: number;
}

const Form = ({ handleClick, titleId }: FormProps) => {
  const [value, setValue] = useState<string>("");
  const stateObj = CardContext();

  const dispatch = stateObj?.dispatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      const todoId = Math.floor(Math.random() * Date.now());
      dispatch(AddTodoAction({ title: value, cardId: titleId, todoId }));
      setValue("");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {" "}
      <TextArea value={value} setValue={setValue} />
      <div className={styles.button_container}>
        <button type="submit" className={styles.button}>
          Add List
        </button>
        <span className={styles.close} onClick={() => handleClick()}>
          X
        </span>
      </div>{" "}
    </form>
  );
};

export default Form;
