import React from "react";
import styles from "../styles/ListCard.module.css";
import Button from "./Button";

const ListCard = () => {
  const handleClick = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.card_header}>
        <h2>Title</h2>
      </div>

      <Button handleClick={handleClick} style={{ marginLeft: "0px" }}>
        + Add a card
      </Button>
    </div>
  );
};

export default ListCard;
