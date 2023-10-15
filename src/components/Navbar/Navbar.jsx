import React from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import styles from './Navbar.module.scss'

export const Navbar = (props) => {
  const { show } = props
  const { width } = useWindowSize()
  return (
    <div
      className={width > 1024 ? styles.desctop : styles.mobile}
      style={
        !show && width <= 1024
          ? { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }
          : { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
      }
    >
      <div className={styles.link}>история</div>
      <div className={styles.link}>площадки</div>
      <div className={styles.link}>описание</div>
      <div className={styles.link}>контакты</div>
    </div>
  )
}
