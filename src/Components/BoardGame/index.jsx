import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { cards10 } from '../../data';
import CardGame from '../cardGame';
import ShuffleButton from '../ShuffleButton';
import shuffleCards from '../../functions/shuffel';
import Popup from '../popUp';
import Timer from '../Timer';

export default function BoardGame({ setActivePlayer }) {
    const [cards, setCards] = useState(cards10.map((card, index) => ({ ...card, id: index })));

    const [turns, setTurns] = useState(0);

    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    const [flippedCards, setFlippedCards] = useState({});

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        shuffleCards(setCards); // Shuffle cards when the component mounts
    }, []);

    // Handle card selection
    const handleChoice = (card) => {
        if (choiceOne && choiceTwo) return;

        // Flip the selected card
        setFlippedCards(prevFlipped => ({
            ...prevFlipped,
            [card.id]: true
        }));

        if (!choiceOne) {
            setChoiceOne(card);
        } else {
            setChoiceTwo(card);
        }
    };

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.value === choiceTwo.value) {
                // Cards match
                setCards(prevCards =>
                    prevCards.map(card =>
                        card.value === choiceOne.value
                            ? { ...card, isMatched: true }
                            : card
                    )
                );
                
                // Clear choices and increment turns
                setChoiceOne(null);
                setChoiceTwo(null);
                setTurns(prevTurns => prevTurns + 1);
            } else {
                // Cards don't match, flip them back after a delay
                setTimeout(() => {
                    setFlippedCards(prevFlipped => {
                        const updated = { ...prevFlipped };
                        [choiceOne.id, choiceTwo.id].forEach(id => {
                            if (updated[id]) updated[id] = false;
                        });
                        return updated;
                    });

                    // Change turn after the delay
                    setActivePlayer(prev => (prev === 'A' ? 'B' : 'A'));
                    
                    // Clear choices and increment turns
                    setChoiceOne(null);
                    setChoiceTwo(null);
                    setTurns(prevTurns => prevTurns + 1);
                }, 1000); // 1 second delay before flipping back
            }
        }
    }, [choiceOne, choiceTwo]);

    // Check if all cards are matched
    useEffect(() => {
        const allMatched = cards.every(card => card.isMatched);
        if (allMatched) {
            setShowPopup(true); // Show the popup if all cards are matched
        }
    }, [cards]);

    // Start a new game by reshuffling the cards
    const startNewGame = () => {
        setCards(cards10.map((card, index) => ({ ...card, id: index, isMatched: false })));
        setFlippedCards({});
        setShowPopup(false);
        setTurns(0);
        shuffleCards(setCards);
    };

    const handleTurnChange = () => {
        setTimeout(() => {
            setActivePlayer(prev => !prev);
        }, 2000); // 2 seconds delay
    };

    return (
        <div className={styles.boardGame}>
            <h2>BoardGame</h2>
            <Timer />
            <ul>
                {cards.map((card) => (
                    <li key={card.id}>
                        <CardGame
                            image={card.image}
                            value={card.value}
                            isFlipped={flippedCards[card.id] || false}
                            handleChoice={() => handleChoice(card)}
                        />
                    </li>
                ))}
            </ul>
            <ShuffleButton setCards={setCards} />
            {showPopup && <Popup message="All cards matched! Start a new game?" onClose={startNewGame} />}
        </div>
    );
}
