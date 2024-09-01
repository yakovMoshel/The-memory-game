import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { cards10 } from '../../data';
import CardGame from '../cardGame';
import ShuffleButton from '../ShuffleButton';
import shuffleCards from '../../functions/shuffel';

export default function BoardGame() {
    // State to hold cards with unique IDs
    const [cards, setCards] = useState(cards10.map((card, index) => ({ ...card, id: index })));
    
    // State to keep track of the number of turns
    const [turns, setTurns] = useState(0);
    
    
    // State to keep track of selected cards
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    // State to manage which cards are flipped
    const [flippedCards, setFlippedCards] = useState({});

    useEffect(() => {
        shuffleCards(setCards); // Shuffle cards when the component mounts
    }, []);

    // Handle card selection
    const handleChoice = (card) => {
        // Return if two cards are already selected
        if (choiceOne && choiceTwo) return;

        // Flip the selected card
        setFlippedCards(prevFlipped => ({
            ...prevFlipped,
            [card.id]: true
        }));

        // Manage card choices
        if (!choiceOne) {
            setChoiceOne(card);
        } else {
            setChoiceTwo(card);
        }
    };

    useEffect(() => {
        // Check if two cards have been selected
        if (choiceOne && choiceTwo) {
            // Compare the selected cards
            if (choiceOne.value === choiceTwo.value) {
                // If they match, mark them as matched
                setCards(prevCards =>
                    prevCards.map(card =>
                        card.value === choiceOne.value
                            ? { ...card, isMatched: true }
                            : card
                    )
                );
            } else {
                // If they don't match, flip them back after a delay
                setTimeout(() => {
                    setFlippedCards(prevFlipped => {
                        const updated = { ...prevFlipped };
                        [choiceOne.id, choiceTwo.id].forEach(id => {
                            if (updated[id]) updated[id] = false;
                        });
                        return updated;
                    });
                }, 1000); // Delay before flipping back
            }

            // Clear choices and increment turns
            setChoiceOne(null);
            setChoiceTwo(null);
            setTurns(prevTurns => prevTurns + 1);
        }
    }, [choiceOne, choiceTwo]);

    return (
        <div className={styles.boardGame}>
            <h2>BoardGame</h2>
            <ul>
                {cards.map((card) => (
                    <li key={card.id}>
                        <CardGame 
                            image={card.image}
                            value={card.value}
                            isFlipped={flippedCards[card.id] || false} // Card flip state
                            handleChoice={() => handleChoice(card)}
                        />
                    </li>
                ))}
            </ul>
            <ShuffleButton setCards={setCards} />
        </div>
    );
}
