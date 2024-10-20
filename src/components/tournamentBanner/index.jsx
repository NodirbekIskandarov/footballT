import styles from './style.module.scss'
import bannerImg from '../../assets/images/tournamentbanner.png'
function TournamentBanner() {
  return (
    <div className={styles.banner}>
        <img src={bannerImg} alt="tournament banner" />
    </div>
  )
}

export default TournamentBanner