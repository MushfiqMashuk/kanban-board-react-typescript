import React, { useEffect, useRef, useState } from "react";
import { DeleteTodoAction, UpdateTodoAction } from "../context/ActionCreator";
import { CardContext } from "../context/CardContext";
import Delete from "../delete.svg";
import Edit from "../edit.svg";
import Lock from "../lock.svg";
import LockOpen from "../lock_open.svg";
import styles from "../styles/TodoCard.module.css";

interface TodoProps {
  text: string;
  todoId: number;
}

const TodoCard = ({ text, todoId }: TodoProps) => {
  const [lock, setLock] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editedValue, setEditedValue] = useState(text);
  const inputRef = useRef<HTMLInputElement>(null);
  const stateProps = CardContext();

  useEffect(() => {
    inputRef?.current?.focus();
  }, [edit]);

  const dispatch = stateProps?.dispatch;

  const handleDragStart = (e: React.SyntheticEvent) => {
    console.log("Drag Starts");
  };

  const handleDragEnd = (e: React.SyntheticEvent) => {
    console.log("Drag Ends");
  };

  const handleDelete = () => {
    dispatch(DeleteTodoAction(todoId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(UpdateTodoAction({ title: editedValue, id: todoId }));
    setEdit(!edit);
  };

  return (
    <div
      draggable={!lock}
      onDragStart={!lock ? handleDragStart : () => {}}
      onDragEnd={!lock ? handleDragEnd : () => {}}
      className={styles.container}
    >
      {edit ? (
        <form action="" onSubmit={handleSubmit}>
          <input
            value={editedValue}
            className={styles.edited_input_field}
            onChange={(e: React.SyntheticEvent) =>
              setEditedValue(e.target.value)
            }
            ref={inputRef}
          />
        </form>
      ) : (
        text
      )}
      <div className={styles.icon_container}>
        <img
          src={Edit}
          title="Edit Todo"
          alt="edit"
          className={styles.icon}
          onClick={() => setEdit(!edit)}
        />
        <img
          src={Delete}
          title="Delete Todo"
          alt="delete"
          className={styles.icon}
          onClick={(e) => handleDelete()}
        />
        <img
          src={!lock ? LockOpen : Lock}
          title="Lock Todo"
          alt="lock"
          className={styles.icon}
          onClick={() => setLock(!lock)}
        />
      </div>
    </div>
  );
};

export default TodoCard;
