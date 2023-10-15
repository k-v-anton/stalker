import React from 'react'
import styles from './Description.module.scss'
import { description } from '../../data/descriptionData'

export const Description = () => {
  return (
    <section className={styles.description} id='description'>
      <div className={styles.container}>
        {
          description.content.map((path, i) => <span key={i}>{path}</span>)
        }
      </div>
    </section>
  )
}
