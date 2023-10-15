import React from 'react'
import { useMatchMedia } from '../../hooks/useMatchMedia'
import styles from './Rules.module.scss'
import { RulesAcordeon } from './RulesAcordeon/RulesAcordeon'
import { Rulesslide } from './Rulesslide'
import { rulesData } from '../../data/rulesData'

export const Rules = () => {
  const { isMobile } = useMatchMedia()
  return (
    <>
      <div id={rulesData.id} className={styles.rules}>{!isMobile ? <Rulesslide /> : <RulesAcordeon />}</div>
    </>
  )
}
