import React from 'react'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import styles from './Link.module.scss'

export const Link = (props) => {
  const { value, state, setState } = props
  const { width } = useWindowSize()

  const handleClickLink = (e) => {
    width <= 1024 && setState(!state)
  }

  return (
    <div
      onClick={handleClickLink}
      className={styles.link}
      style={!state && width <= 1024 ? { opacity: '0' } : { opacity: '1' }}
    >
      {value}
    </div>
  )
}
