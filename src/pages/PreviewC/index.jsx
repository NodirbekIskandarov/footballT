import styles from "./style.module.scss";
import clublogo from "../../assets/images/clublogoo.png";
import top from "../../assets/images/top.png";
import vorata from "../../assets/images/vorata.png";
function PreviewC() {
  return (
    <div className={styles.preview}>
      <div className="container">
        <div className={styles.one}>
          <div className={styles.club}>
            <img src={clublogo} alt="clublogo" />
            <span>BELARUS NT</span>
          </div>
          <span className={styles.center_text}>Tournament position</span>
          <div className={styles.club}>
            <span>BELARUS NT</span>
            <img src={clublogo} alt="clublogo" />
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.left}>
            <span>Place in the table </span>
            <span>5</span>
            <div className={styles.line}></div>
            <span className={styles.uch}>Players av. age</span>
            <span className={styles.turt}>28.8</span>
          </div>
          <div className={styles.middle}>
            <div className={styles.boxes}>
              <span>88</span>
              <div className={styles.box}>
                <img src={top} alt="top" />
                <span>Goals scored</span>
              </div>
              <span>56</span>
            </div>
            <div className={styles.boxes}>
              <span>88</span>
              <div className={styles.box}>
                <img src={vorata} alt="top" />
                <span>Goals scored</span>
              </div>
              <span>56</span>
            </div>
            <div className={styles.boxes}>
              <span>88</span>
              <div className={styles.box}>
                <img src={top} alt="top" />
                <span>Goals scored</span>
              </div>
              <span>56</span>
            </div>
          </div>
          <div className={styles.right}>
            <span>Place in the table </span>
            <span>5</span>
            <div className={styles.line}></div>
            <span className={styles.uch}>Players av. age</span>
            <span className={styles.turt}>28.8</span>
          </div>
        </div>
        <div className={styles.three}>
            
        </div>
        <div className={styles.four}></div>
        <div className={styles.five}></div>
      </div>
    </div>
  );
}

export default PreviewC;
