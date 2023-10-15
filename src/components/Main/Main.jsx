import React from 'react'
import styles from './Main.module.scss'
import imgbg from '../../img/main/bg.webp'

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <img className={styles.imgBG} src={imgbg} alt="" />
      </div>
    </main>
  )
}
