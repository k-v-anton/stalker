import React from 'react'
import { useMatchMedia } from '../../hooks/useMatchMedia'
import styles from './Rules.module.scss'
import { RulesAcordeon } from './RulesAcordeon/RulesAcordeon'
import { Rulesslide } from './Rulesslide'

export const Rules = () => {
  const { isMobile } = useMatchMedia()
  return (
    <>
      <div className={styles.rules}>{!isMobile ? <Rulesslide /> : <RulesAcordeon />}</div>
    </>
  )
}
