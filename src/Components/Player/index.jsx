import React from 'react'
import styles from './style.module.scss'

export default function player({ name, isActive }) {
  return (
    <div className={`${styles.player} ${isActive ? styles.active : ''}`}>
      <p>{name}</p>
    </div>
  )
}
