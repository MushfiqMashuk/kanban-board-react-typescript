import React from "react";
import styles from "../styles/AddListCard.module.css";

interface InputProps {
  value: string;
  inputRef: HTMLInputElement;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  
}

const InputField = ({ value, inputRef, setValue }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter list title..."
      className={styles.input}
      ref={inputRef}
    />
  );
};

export default InputField;
