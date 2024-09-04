import React from 'react';
import styles from './style.module.scss'
import shuffleCards from '../../functions/shuffel';

export default function ShuffleButton({ setCards }) {
const handelShuffle = () => {
    
    shuffleCards(setCards);
}
    return (
        <button onClick={handelShuffle}>Shuffle</button>
    );
}
