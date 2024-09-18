import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [activePlayer, setActivePlayer] = useState('A');
  const [pointsA, setPointsA] = useState(0);
  const [pointsB, setPointsB] = useState(0);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});
  
  return (
    <GameContext.Provider
      value={{
        activePlayer,
        setActivePlayer,
        pointsA,
        setPointsA,
        pointsB,
        setPointsB,
        turns,
        setTurns,
        choiceOne,
        setChoiceOne,
        choiceTwo,
        setChoiceTwo,
        flippedCards,
        setFlippedCards,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
