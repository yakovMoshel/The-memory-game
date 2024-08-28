import React from 'react';
import styles from './style.module.scss'

export default function ShuffleButton({ setCards }) {
    // Function to shuffle the cards
    const shuffleCards = () => {
        // Update the state with a shuffled version of the current cards array
        setCards(prevCards => {
            // Create a copy of the current cards array
            const shuffledCards = [...prevCards];
            // Shuffle the array using the Fisher-Yates algorithm
            for (let i = shuffledCards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                // Swap elements at positions i and j
                [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
            }
            // Return the shuffled array to update the state
            return shuffledCards;
        });
    };

    return (
        // Button to trigger the shuffle function
        <button onClick={shuffleCards}>Shuffle</button>
    );
}
