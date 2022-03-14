import React, { useEffect, useState } from "react";
import styles from "../styles/KanbanBoard.module.css";
import AddListCard from "./AddListCard";
import Button from "./Button";
import ListCard from "./ListCard";

const KanbanBoard: React.FC = (): JSX.Element => {
  const [addList, setAddList] = useState<boolean>(false);
  //const [totalList, setTotalList] = useState<number>();

  useEffect(() => {}, []);

  const handleClick = () => {
    setAddList(true);
  };

  return (
    <div className={styles.container}>
      {addList ? (
        <AddListCard />
      ) : (
        <Button handleClick={handleClick}>+ Add a list</Button>
      )}
    </div>
  );
};

export default KanbanBoard;
