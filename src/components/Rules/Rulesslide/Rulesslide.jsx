import React, { useState } from 'react'
import styles from './Rulesslide.module.scss'
import { rulesData } from '../../../data/rulesData'

export const Rulesslide = () => {

  const [state, setState] = useState(0)

  const handleEnterActiveRule = (e) => {
    setState(e.target.dataset.index)
  }

  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <ul className={styles.list} onClick={handleEnterActiveRule}>
        {rulesData.map((area, i) => (
          <li className={styles.ruleName} key={area.id} data-index={i}>
            {area.name}
          </li>
        ))}
      </ul>
    </div>

    <div className={styles.description}>
      {rulesData[state].rule.map((path, i) => (
        <span className={styles.path} key={i}>
          {path}
        </span>
      ))}
    </div>
  </div>
  )
}
