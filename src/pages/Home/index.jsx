import { Banner, GameCar, HomeMedia, HomePlanedGames, Partners } from "../../components"
import styles from './home.module.scss'
function Home() {
  return (
    <div>
        <Banner/>
        <div className={styles.home}>
          <GameCar/>
          <HomeMedia/>
          <HomePlanedGames/>
          <Partners/>
        </div>
    </div>
  )
}

export default Home