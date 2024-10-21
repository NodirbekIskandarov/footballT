import React from 'react'
import styles from './style.module.scss'
import mediaphoto from '../../assets/images/mediaphoto.png'
function Video() {
  return (
    <div className={styles.video}>
      <div className='container'>
      <div className={styles.boxes}>
          <div className={styles.box}>
            <img src={mediaphoto} alt="media photo" />
            <div className={styles.text}>
              <span>Uzbekistan kubogi 2024</span>
              <span>14 June</span>
              <span>Final OIL STAR vs  BMB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video