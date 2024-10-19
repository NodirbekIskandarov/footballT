import { Banner, GameCar, HomeMedia } from "../../components"
import styles from './home.module.scss'
function Home() {
  return (
    <div>
        <Banner/>
        <div className={styles.home}>
          <GameCar/>
          <HomeMedia/>
        </div>
    </div>
  )
}

export default Home