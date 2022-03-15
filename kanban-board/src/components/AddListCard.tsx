import React, { useState } from "react";
import styles from "../styles/AddListCard.module.css";

interface Props {
  cardState: boolean;
  handleClick(): void;
}

interface CardTitle {
  title: string;
}

const AddListCard = ({ cardState, handleClick }: Props) => {
  const [value, setValue] = useState<string>("");
  const [titles, setTitles] = useState<CardTitle[]>([]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (value.length > 0) {
      setTitles([...titles, { title: value }]);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter list title..."
          className={styles.input}
        />
        <div className={styles.button_container}>
          <button type="submit" className={styles.button}>
            Add List
          </button>
          <span className={styles.close} onClick={() => handleClick()}>
            X
          </span>
        </div>
      </form>
    </div>
  );
};

export default AddListCard;
