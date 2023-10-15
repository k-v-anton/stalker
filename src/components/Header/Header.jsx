import React, { useRef } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import logo from '../../img/header/logo.jpg'
import { Hamburger } from './Hamburger/Hamburger'
import styles from './Header.module.scss'

export const Header = () => {
  const headerRef = useRef(null)
  const { width, height } = useWindowSize()

  const handleClickLogo = () => {
    headerRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={styles.header}>
      <span ref={headerRef} className={styles.subheader}></span>
      <div className={styles.container}>
        <div className={styles.logo} onClick={handleClickLogo}>
          <img className={styles.logoImg} src={logo} alt='' />
        </div>

        <Hamburger />
      </div>
    </header>
  )
}
