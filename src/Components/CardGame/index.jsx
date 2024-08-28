import React, { useState } from 'react';
import styles from './style.module.scss';

export default function CardGame({ image, value }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={styles.cardContainer} onClick={handleClick}>
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
                <img className={styles.cardFront}
                  style={{ backgroundImage: `url(${image})` }} alt={value}>
                </img>
                <div className={styles.cardBack}>
                </div>
            </div>
        </div>
    );
}
