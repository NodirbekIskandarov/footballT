import React from 'react'
import styles from './style.module.scss'
import player from '../../assets/images/player.png'
import { FaArrowRightLong } from "react-icons/fa6"
function BestPlayers() {
  return (
    <div className={styles.players}>
        <div className='container'>
            <div className={styles.title_part}>
                <span>Eng yaxshi futbolistlar</span>
                <select name="" id="">
                    <option value="">2024</option>
                    <option value="">2024</option>
                </select>
            </div>

            <div className={styles.boxes}>
                <div className={styles.box}>
                    <img src={player} alt="player" />
                    <span className={styles.name}>Asadov Asadbek</span>
                    <span className={styles.position}>O’yinchi</span>
                    <button>View <FaArrowRightLong/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestPlayers