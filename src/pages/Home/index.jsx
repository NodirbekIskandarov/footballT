import { Banner, GameCar } from "../../components"
import styles from './home.module.scss'
function Home() {
  return (
    <div>
        <Banner/>
        <div className={styles.home}>
          <GameCar/>
        </div>
    </div>
  )
}

export default Home