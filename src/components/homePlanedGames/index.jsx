import styles from "./style.module.scss";
import rasm from "../../assets/images/club-logo.png";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
function HomePlanedGames() {
  return (
    <div className="container">
      <div className={styles.planed_games}>
        <div className={styles.game}>
          <div className={styles.clubs}>
            <div>
              <img src={rasm} alt="club-logotip" />
              <span>NY Yorks</span>
            </div>
            <span>VS</span>
            <div>
              <img src={rasm} alt="club-logotip" />
              <span>NY Yorks</span>
            </div>
          </div>
          <div className={styles.date}>
            <div className={styles.time}>
              <IoTimeOutline />
              <span>5:00 PM</span>
            </div>
            <div className={styles.location}>
              <CiLocationOn color="red" />
              <span>London</span>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.fav}>
              <MdFavoriteBorder />
            </div>
            <div className={styles.view}>
              <span>View Details</span>
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePlanedGames;
