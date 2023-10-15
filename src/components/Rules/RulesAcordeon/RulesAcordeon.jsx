import React from 'react'
import { rulesData } from '../../../data/rulesData'
import styles from './RulesAcordeon.module.scss'

export const RulesAcordeon = () => {
  return (
    <div className={styles.acorContainer}>
      {rulesData.content.map((el) => (
        <>
          <input type='radio' name='acor' id={`acor${el.id}`} checked='checked' />
          <label for={`acor${el.id}`}>{el.name}</label>
          <div className={styles.acorBody}>
            {el.rule.map((path, i) => (
              <span className={styles.path} key={i}>
                {path}
              </span>
            ))}
          </div>
        </>
      ))}
    </div>
  )
}
