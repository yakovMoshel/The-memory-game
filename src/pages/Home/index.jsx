import React from 'react'
import styles from './style.module.scss'
import NavButton from '../../Components/NavButton'

export default function Home() {
    return (
        <div className={styles.HomePage}>
            <h2>welcome to memory game</h2>
            <img src="images/—Pngtree—cloud or smoke on an_8473681.png" alt="" />
            
            <NavButton navTo={"/PlayersPage"} massge="Select Players"/>

        </div>
    )
}
