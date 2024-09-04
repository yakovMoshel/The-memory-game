import React, { useState } from 'react'
import styles from './style.module.scss'
import BoardGame from '../../Components/BoardGame'
import { useLocation } from 'react-router-dom';

export default function GamePage() {

  const location = useLocation();
  const { playerA, playerB } = location.state || { playerA: '', playerB: '' };
  const [isPlayerATurn, setIsPlayerATurn] = useState(true);

  const handleTurnChange = () => {
    setTimeout(() => {
      setIsPlayerATurn(prev => !prev); 
    },1500)
  };

  return (
       <div>
      <h2>Game Page</h2>
      <div className={styles.playersContainer}>
        <p className={isPlayerATurn ? styles.activePlayer : ''}>Player A: {playerA}</p>
        <p className={!isPlayerATurn ? styles.activePlayer : ''}>Player B: {playerB}</p>
      </div>
      <BoardGame onTurnChange={handleTurnChange} />
    </div>
  );
}
