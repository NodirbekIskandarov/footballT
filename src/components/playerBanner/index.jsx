import React from 'react'
import styles from './style.module.scss'
import player from '../../assets/images/player-detail.png'
import stadion from '../../assets/images/stadionicon.png'
import krasovka from '../../assets/images/krasovka.png'
function PlayerBanner() {
  return (
    <div className={styles.player_banner}>
        <div className='container'>
          <div className={styles.image_part}>
            <div className={styles.image}>
              <img src={player} alt="player detail image" />
            </div>
            <div className={styles.right}>
              <span className={styles.name}>Cherneyko Yevgeniy</span>
              <div className={styles.date}>
                <span>Date of birth:</span>
                <span>12 November  2002</span>
              </div>
              <div className={styles.age}>
                <span>Age :</span>
                <span>22 years</span>
              </div>
              <div className={styles.club}>
                <span>Club :</span>
                <span>BELARUS NT</span>
              </div>
              <div className={styles.scores}>
                <div><img src={stadion} alt="stadion icon" /><span>5</span></div>
                <div><img src={krasovka} alt="krasovka icon" /><span>5</span></div>
                <div><div className={styles.yellow}></div><span>5</span></div>
                <div><div className={styles.red}></div><span>5</span></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PlayerBanner