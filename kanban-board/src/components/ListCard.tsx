import React from 'react';
import Button from './Button';
import styles from '../styles/ListCard.module.css'

const ListCard = () => {

    const handleClick = () => {

    }
  return (
    <div className={styles.container}>
      <h2>Title</h2>
      <Button handleClick={handleClick}>Add a card</Button>
    </div>
  );
}

export default ListCard