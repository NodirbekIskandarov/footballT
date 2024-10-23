import styles from "./style.module.scss";
import banner from "../../assets/images/previewbanner.png";
import clublogo from '../../assets/images/clublogoo.png'
import { IoLocation } from "react-icons/io5";
function PreviewBanner() {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.box}>
        <div className={styles.info_part}>
          <span className={styles.date}>14 August 2024 Wednesday </span>
          <div className={styles.location}>
            <IoLocation color="red"/>
            <span>Yunusobod SM</span>
          </div>
          <span className={styles.time}>20:00</span>
        </div>
        <div className={styles.club_part}>
          <div className={styles.club}>
            <img src={clublogo} alt="clublogo" />
            <span>BELARUS NT</span>
          </div>
          <span className={styles.shot}>3:2</span>
          <div className={styles.club}>
            <img src={clublogo} alt="clublogo" />
            <span>BELARUS NT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewBanner;
