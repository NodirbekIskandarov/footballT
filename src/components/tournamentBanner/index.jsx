import styles from './style.module.scss'
import bannerImg from '../../assets/images/tournamentbanner.png'
import { useEffect, useState } from 'react'
import { getRequest } from '../../utils/request'
import { useParams } from 'react-router-dom'
import { get_league_banner } from '../../utils/API_urls'
function TournamentBanner() {
  const {id} = useParams()
  const [data, setData] = useState(null)
  useEffect(() => {
    getRequest(get_league_banner+id)
    .then(response => {
      console.log(response)
      setData(response?.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [id])
  return (
    <div className={styles.banner}>
        <img src={data?.icon ?? bannerImg} alt="tournament banner" />
    </div>
  )
}

export default TournamentBanner