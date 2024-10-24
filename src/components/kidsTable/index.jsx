import React from 'react'
import styles from './style.module.scss'
import kid from '../../assets/images/kid.png'
function KidsTable() {
    return (
        <div className={styles.kids}>
            <div className='container'>
                <div className={styles.table}>
                    <div className={styles.box}>
                        <span className={styles.date}>14  August 2024, Wednesday</span>
                        <div className={styles.tr}>
                            <div className={styles.image}>
                                <img src={kid} alt="kid" />
                            </div>
                            <div className={styles.clubs}>
                                <div className={styles.club}>
                                    <span>Belarus NT</span>
                                </div>
                                <div className={styles.shot}>
                                    <span>3:2</span>
                                </div>
                                <div className={styles.club}>
                                    <span>Belarus NT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <span className={styles.date}>14  August 2024, Wednesday</span>
                        <div className={styles.tr}>
                            <div className={styles.image}>
                                <img src={kid} alt="kid" />
                            </div>
                            <div className={styles.clubs}>
                                <div className={styles.club}>
                                    <span>Belarus NT</span>
                                </div>
                                <div className={styles.shot}>
                                    <span>3:2</span>
                                </div>
                                <div className={styles.club}>
                                    <span>Belarus NT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <span className={styles.date}>14  August 2024, Wednesday</span>
                        <div className={styles.tr}>
                            <div className={styles.image}>
                                <img src={kid} alt="kid" />
                            </div>
                            <div className={styles.clubs}>
                                <div className={styles.club}>
                                    <span>Belarus NT</span>
                                </div>
                                <div className={styles.shot}>
                                    <span>3:2</span>
                                </div>
                                <div className={styles.club}>
                                    <span>Belarus NT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KidsTable