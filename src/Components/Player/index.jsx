import React from 'react';
import styles from './style.module.scss';

export default function Player({ name, isActive, points }) {
  return (
    <div className={`${styles.player} ${isActive ? styles.active : ''}`}>
      <p>{name}</p>
      <p>Points: {points}</p>
    </div>
  );
}
