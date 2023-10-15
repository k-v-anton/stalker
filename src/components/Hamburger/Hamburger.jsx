import React, { useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Navbar } from '../Navbar/Navbar'
import styles from './Hamburger.module.scss'

export const Hamburger = () => {
  const [state, setState] = useState(false)
  const { width } = useWindowSize()

  const handleClick = () => {
    setState(!state)
  }

  return (
    <>
      {width <= 1024 && (
        <div className={styles.hamburger} onClick={handleClick}>
          <span className={state ? `${styles.line} ${styles.open}` : styles.line}></span>
        </div>
      )}
      <Navbar state={state} setState={setState} />
    </>
  )
}
