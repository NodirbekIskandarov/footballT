import React from 'react'
import styles from './style.module.scss'
function NewsCard() {
  return (
    <div className={styles.news_card}>
        <div className='container'>
            <div className={styles.card}>
                <div>
                    <div>
                        <img src="" alt="" />
                        <span>BELARUS NT</span>
                    </div>
                    <span>vs</span>
                    <div>
                        <img src="" alt="" />
                        <span>BELARUS NT</span>
                    </div>

                    <span>JIzzax oliy ligadagi o’rnini saqlab qoldi</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsCard