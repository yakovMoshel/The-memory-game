import React, { useState } from 'react';
import styles from './style.module.scss'
import data from '../../data.json';
import CardGame from '../cardGame'
import ShuffleButton from '../ShuffleButton';

export default function BoardGame() {
    const [cards, setCards] = useState(data.cards10);

    return (
        <div className={styles.boardGame}>
            <h2>BoardGame</h2>
            <ul>
                {cards.map((card, index) => (
                    <li key={index}>
                        <CardGame
                            image={card.image}
                            value={card.value}
                        />
                    </li>
                ))}
            </ul>
            <ShuffleButton setCards={setCards}/>
        </div>
    );
}
