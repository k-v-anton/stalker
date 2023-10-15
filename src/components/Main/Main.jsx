import React from 'react'
import { MainBg } from './MainBG/MainBG'
import styles from './Main.module.scss'
import { mainData } from '../../data/mainData'

export const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{mainData.title}</h1>
      <MainBg />
      
    </main>
  )
}
