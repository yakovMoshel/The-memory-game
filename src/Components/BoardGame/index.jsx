import React from 'react';
import styles from './style.module.scss'
import data from '../../data.json';
import CardGame from '../cardGame'

export default function BoardGame() {
    return (
        <div className={styles.boardGame}>
            <h2>BoardGame</h2>
            <ul>
                {data.cards10.map((card, index) => (
                    <li key={index}>
                        <CardGame
                            image={card.image}
                            value={card.value}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
