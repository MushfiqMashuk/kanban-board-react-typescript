import React from "react";
import styles from "../styles/ListCard.module.css";

interface TextAreaProps {
  value: string;
  setValue(): void;
}

const TextArea = ({ value, setValue }: TextAreaProps) => {
  return (
    <textarea
      className={styles.input}
      placeholder="Enter a title for this card"
      value={value}
      onChange={(e: React.SyntheticEvent) => {
        setValue(e.target.value);
      }}
    ></textarea>
  );
};

export default TextArea;
