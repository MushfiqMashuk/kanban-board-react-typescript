import React from "react";
import styles from "../styles/Button.module.css";

interface Props {
  children: React.ReactNode;
  handleClick(): void;
  style?: object;
}

const Button = ({ children, handleClick, style }: Props): JSX.Element => {
  return (
    <button className={styles.button} onClick={handleClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
