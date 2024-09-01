const shuffleCards = (setCards) => {
    setCards(prevCards => {
        const shuffledCards = [...prevCards];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        return shuffledCards;
    });
};

export default shuffleCards;
