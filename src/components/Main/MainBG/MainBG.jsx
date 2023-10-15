import React from 'react'
import styles from './MainBg.module.scss'
import imgbg from '../../../img/main/bg.webp'

export const MainBg = () => {
  return (
    <div className={styles.background}>
      <span className={styles.shadow}></span>
      <img className={styles.imgBG} src={imgbg} alt='' />
      <span className={styles.shadow}></span>
      <span className={styles.bottomShadow}></span>
    </div>
  )
}
