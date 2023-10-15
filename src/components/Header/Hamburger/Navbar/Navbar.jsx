import React from 'react'
import { dataLink } from '../../../../data/headerData'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import { Link } from './Link'
import styles from './Navbar.module.scss'

export const Navbar = (props) => {
  const { state, setState } = props
  const { width } = useWindowSize()

  return (
    <div
      className={width > 1024 ? styles.desctop : styles.mobile}
      style={
        !state && width <= 1024
          ? { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }
          : { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
      }
    >
      {dataLink.map((link) => (
        <Link key={link.id} value={link.value} state={state} setState={setState} linkTo={link.linkTo} />
      ))}
    </div>
  )
}
