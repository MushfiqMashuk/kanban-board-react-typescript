import React from "react";
import styles from "../styles/AddListCard.module.css";

const AddListCard = () => {
  return (
    <div className={styles.container}>
      <form action="#" className={styles.form}>
        <input type="text" placeholder="Enter a title..." className={styles.input}/>
        <div className={styles.button_container}>
          <button type="submit" className={styles.button}>Add List</button>
          <span>X</span>
        </div>
      </form>
    </div>
  );
};

export default AddListCard;
