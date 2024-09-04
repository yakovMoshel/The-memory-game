import React from 'react';
import styles from './style.module.scss';

export default function Popup({ message, onClose }) {
    if (!message) return null;
    return (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <h2>משחק חדש?</h2>
                <p>{message}</p>
                <button className={styles.closeButton} onClick={onClose}>כן</button>
            </div>
        </div>

    );
};

;
