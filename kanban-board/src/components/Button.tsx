import React from "react";
import styles from "../styles/Button.module.css";

interface Props {
  children: React.ReactNode;
  handleClick(): void;
}

const Button = ({ children, handleClick }: Props): JSX.Element => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
