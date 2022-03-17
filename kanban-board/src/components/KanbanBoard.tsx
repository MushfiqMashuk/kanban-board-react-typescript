import React, { useState } from "react";
import { CardContext } from "../context/CardContext";
import styles from "../styles/KanbanBoard.module.css";
import AddListCard from "./AddListCard";
import Button from "./Button";
import ListCard from "./ListCard";

const KanbanBoard: React.FC = (): JSX.Element => {
  const [addList, setAddList] = useState<boolean>(false);

  const stateObj = CardContext();
  const state = stateObj?.state;

  const handleClick = () => {
    setAddList(!addList);
  };

  return (
    <div className={styles.container}>
      {state?.titles.length > 0 &&
        state?.titles.map((card, index) => (
          <ListCard key={index} card={card} />
        ))}
      {addList ? (
        <AddListCard cardState={addList} handleClick={handleClick} />
      ) : (
        <Button handleClick={handleClick}>+ Add a list</Button>
      )}
    </div>
  );
};

export default KanbanBoard;
