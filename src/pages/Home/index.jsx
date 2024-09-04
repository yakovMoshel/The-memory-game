import React from 'react'
import styles from './style.module.scss'
import NavButton from '../../Components/NavButton'

export default function Home() {
    return (
        <div className={styles.HomePage}>
            <h2>welcome to memory game</h2>
            
            <NavButton navTo={"/PlayersPage"} />

        </div>
    )
}
