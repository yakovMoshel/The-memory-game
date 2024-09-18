import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.scss';
import { cards10 } from '../../data';
import CardGame from '../cardGame';
import ShuffleButton from '../ShuffleButton';
import shuffleCards from '../../functions/shuffel';
import Popup from '../popUp';
import Timer from '../Timer';
import { GameContext } from '../../functions/GameContext';

export default function BoardGame({ playerA, playerB }) {
  const {
    activePlayer, setActivePlayer,
    pointsA, setPointsA, pointsB, setPointsB,
    choiceOne, setChoiceOne, choiceTwo, setChoiceTwo,
    flippedCards, setFlippedCards, turns, setTurns
  } = useContext(GameContext);

  const [cards, setCards] = useState(cards10.map((card, index) => ({ ...card, id: index })));
  const [winner, setWinner] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    shuffleCards(setCards);
  }, []);

  const handleChoice = (card) => {
    if (choiceOne && choiceTwo) return;

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
        setCards(prevCards =>
          prevCards.map(card =>
            card.value === choiceOne.value
              ? { ...card, isMatched: true }
              : card
          )
        );

        if (activePlayer === 'A') {
          setPointsA(prev => prev + 1);
        } else {
          setPointsB(prev => prev + 1);
        }

        if (cards.every(card => card.isMatched || card.value === choiceOne.value)) {
          const winner = pointsA > pointsB ? playerA : playerB;
          setWinner(winner);
          setShowPopup(true);
        }
      } else {
        setTimeout(() => {
          setFlippedCards(prevFlipped => {
            const updated = { ...prevFlipped };
            [choiceOne.id, choiceTwo.id].forEach(id => {
              if (updated[id]) updated[id] = false;
            });
            return updated;
          });
          setActivePlayer(prev => prev === 'A' ? 'B' : 'A');
        }, 1000);
      }

      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns(prevTurns => prevTurns + 1);
    }
  }, [choiceOne, choiceTwo]);
  const startNewGame = () => {
    setCards(cards10.map((card, index) => ({ ...card, id: index, isMatched: false })));
    setFlippedCards({});
    setShowPopup(false);
    setWinner('');
    setPointsA(0);
    setPointsB(0);
    setTurns(0);
    shuffleCards(setCards);
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
      {showPopup && <Popup message="All cards matched! Start a new game?" winner={winner} onClose={startNewGame} />}
    </div>
  );
}
