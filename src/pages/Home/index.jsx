import { Banner, GameCar, HomeMedia, HomePlanedGames } from "../../components"
import styles from './home.module.scss'
function Home() {
  return (
    <div>
        <Banner/>
        <div className={styles.home}>
          <GameCar/>
          <HomeMedia/>
          <HomePlanedGames/>
        </div>
    </div>
  )
}

export default Home