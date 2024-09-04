import React from 'react';
import styles from './style.module.scss';

export default function CardGame({ image, value, isFlipped, handleChoice }) {
    const handleClick = () => {
        if (!isFlipped) {
            handleChoice();
        }
        
    };

    return (
        <div className={styles.cardContainer} onClick={handleClick}>
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
                <img className={styles.cardFront} src={image} alt={value} />
                <div className={styles.cardBack}></div>
            </div>
        </div>
    );
}
