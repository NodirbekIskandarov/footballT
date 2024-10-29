import styles from './style.module.scss'
import stadion from '../../assets/images/stadionicon.png'
import krasovka from '../../assets/images/krasovka.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRequest } from '../../utils/request'
import { about_player } from '../../utils/API_urls'
function PlayerBanner() {
  const pk = useParams()
  const [data, setData] = useState(null)
  useEffect(() => {
    getRequest(`${about_player}${pk.id}`)
    .then(response => {
      console.log(response, "player")
      setData(response?.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [pk.id])
  return (
    <div className={styles.player_banner}>
        <div className='container'>
          <div className={styles.image_part}>
            <div className={styles.image}>
              <img src={data?.image} alt="player detail image" />
            </div>
            <div className={styles.right}>
              <span className={styles.name}>{data?.name}</span>
              <div className={styles.date}>
                <span>Date of birth:</span>
                <span>{data?.birthday}</span>
              </div>
              <div className={styles.age}>
                <span>Age :</span>
                <span>{data?.age} years</span>
              </div>
              <div className={styles.club}>
                <span>Club :</span>
                <span>{data?.current_team?.name}</span>
              </div>
              <div className={styles.scores}>
                <div><img src={stadion} alt="stadion icon" /><span>{data?.events?.assists}</span></div>
                <div><img src={krasovka} alt="krasovka icon" /><span>{data?.events?.goals}</span></div>
                <div><div className={styles.yellow}></div><span>{data?.events?.yellows}</span></div>
                <div><div className={styles.red}></div><span>{data?.events?.reds}</span></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PlayerBanner