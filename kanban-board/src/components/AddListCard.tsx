import React, { useEffect, useRef, useState } from "react";
import { AddTitleAction } from "../context/ActionCreator";
import { CardContext } from "../context/CardContext";
import styles from "../styles/AddListCard.module.css";
import InputField from "./InputField";

interface Props {
  cardState: boolean;
  handleClick(): void;
}

// interface CardTitle {
//   title: string;
// }

const AddListCard = ({ cardState, handleClick }: Props) => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  //const [titles, setTitles] = useState<CardTitle[]>([]);
  const stateProps = CardContext();

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (value.length > 0) {
      //setTitles([...titles, { title: value }]);
      const titleId = Math.floor(Math.random() * Date.now());
      stateProps?.dispatch(AddTitleAction({ title: value, titleId: titleId }));
      inputRef?.current?.focus();
      setValue("");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField value={value} setValue={setValue} inputRef={inputRef} />
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
