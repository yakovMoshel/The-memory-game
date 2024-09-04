import React, { useState } from 'react'
import styles from './style.module.scss'
import NavButton from '../NavButton';

export default function FormPlayers() {
    const [playerA, setPlayerA] = useState('');
    const [playerB, setPlayerB] = useState('');
    return (
        <div className={styles.FormPlayers}>
            <label>Player A:
                <input
                    type="text"
                    value={playerA}
                    onChange={(e) => setPlayerA(e.target.value)}
                />
            </label>

            <label>Player B:
                <input
                    type="text"
                    value={playerB}
                    onChange={(e) => setPlayerB(e.target.value)}
                />
            </label>

            <NavButton navTo={"/GamePage"}  state={{ playerA, playerB }} />
        </div>
    )
}
