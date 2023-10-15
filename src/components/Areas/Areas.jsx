import React from 'react'
import one from '../../img/areas/one.jpg'
import three from '../../img/areas/tree.jpg'
import two from '../../img/areas/two.jpg'
import styles from './Areas.module.scss'

export const Areas = () => {
  const data = [
    {
      id: 1,
      img: one,
      title: 'Лес',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, itaque.',
    },
    {
      id: 2,
      img: two,
      title: 'Город',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, itaque.',
    },
    {
      id: 3,
      img: three,
      title: 'Горы',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, itaque.',
    },
  ]

  return (
    <div className={styles.areas} id='areas'>
      <div className={styles.container}>
        {data.map((area) => (
          <div key={area.id} className={styles.wrapper}>
            <div className={styles.front}>
              <div className={styles.wrapperMap}>
                <img className={styles.map} src={area.img} alt='img' />
              </div>
              <h2 className={styles.title}>{area.title}</h2>
              <span className={styles.shadow}></span>
            </div>

            <div className={styles.back}>
              <span>{area.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
