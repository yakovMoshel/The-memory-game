import React from 'react';
import styles from './style.module.scss';

export default function Popup({ message, onClose, winner }) {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h2>{message}</h2>
        {winner && <p>{winner} is the winner!</p>}
        <button className={styles.closeButton} onClick={onClose}>yes</button>
      </div>
    </div>
  );
}
