import React, { useContext } from 'react';
import styles from './style.module.scss';
import BoardGame from '../../Components/BoardGame';
import Player from '../../Components/Player';
import { useLocation } from 'react-router-dom';
import { GameContext } from '../../functions/GameContext';

export default function GamePage() {
  const location = useLocation();
  const { playerA, playerB } = location.state || { playerA: '', playerB: '' };
  
  const { activePlayer, pointsA, pointsB } = useContext(GameContext);

  return (
    <div className={styles.GamePage}>
      <div className={styles.players}>
        <Player name={playerA} isActive={activePlayer === 'A'} points={pointsA} />
        <Player name={playerB} isActive={activePlayer === 'B'} points={pointsB} />
      </div>
      <BoardGame playerA={playerA} playerB={playerB} />
    </div>
  );
}
