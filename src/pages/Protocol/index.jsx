import React from 'react'
import styles from './style.module.scss'
import club from '../../assets/images/clublogoo.png'

function Protocol() {
  return (
    <div className={styles.protocol}>
      <div className='container'>
        <div className={styles.title_part}>
          <div className={styles.club}>
            <img src={club} alt="clublogoo" />
            <span>BELARUS NT</span>
          </div>
          <div className={styles.vs}>
            <span>STARTING LINEUP</span>
          </div>
          <div className={styles.club}>
            <span>BELARUS NT</span>
            <img src={club} alt="clublogoo" />
          </div>
        </div>
        <div className={styles.table_part}>
          <div className={styles.tr}>
            <div>
              <span>Cherneyko Yevgeniy</span>
            </div>
            <div>
              <span>Cherneyko Yevgeniy</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Protocol