import React from 'react'
import styles from './style.module.scss'
import logo from '../../assets/images/clublogoo.png'
function GamesTournament() {
    return (
        <div className={styles.games}>
            <div className='container'>
                <div className={styles.table}>
                    <span className={styles.sana}>14 August 2024 </span>
                    <div className={styles.table_part}>
                        <div className={styles.left}>
                            <div className={styles.image_part}>
                                <img src={logo} alt="club logosi" />
                            </div>
                            <div className={styles.name_part}>BELARUS NT</div>
                        </div>
                        <div className={styles.shot}>3:1</div>
                        <div className={styles.right}>
                            <div className={styles.name_part}>BELARUS NT</div>
                            <div className={styles.image_part}>
                                <img src={logo} alt="club logosi" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamesTournament