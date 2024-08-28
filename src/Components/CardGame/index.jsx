import React from 'react'
import styles from './style.module.scss'

export default function cardGame({image, value}) {

  return (
    <div className={styles.cardGame} kay={value}>
      <img src={image} alt={value}/>
    </div>
  )
}
