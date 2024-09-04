import React, { useState } from 'react'
import styles from './style.module.scss'
import BoardGame from '../../Components/BoardGame'
import Player from '../../Components/Player'
import { useLocation } from 'react-router-dom';

export default function GamePage() {

  const location = useLocation();
  const { playerA, playerB } = location.state || { playerA: '', playerB: '' };
  const [activePlayer, setActivePlayer] = useState('A');

 
  return (
       <div className={styles.GamePage}>
      <h2>Game Page</h2>
     <div className={styles.players}>
        <Player name={playerA} isActive={activePlayer === 'A'} />
        <Player name={playerB} isActive={activePlayer === 'B'} />
        </div>
      <BoardGame setActivePlayer={setActivePlayer} />
    </div>
  );
}
