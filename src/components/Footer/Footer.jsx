import React from 'react'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footer} id='contacts'>
      <div className={styles.container}>
        <div className={styles.logoteam}>
          RoksArt
          <span className={styles.label}>team</span>
          <span className={styles.year}>2023</span>
        </div>
      </div>
    </div>
  )
}
