import React from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom';


export default function NavButton({navTo, state}) {
    const navigate = useNavigate();

    const handelNav = () => {
        navigate(navTo, { state });
    }

  return (
    <button className={styles.NavButton} onClick={handelNav}>NavButton</button>
  )
}
