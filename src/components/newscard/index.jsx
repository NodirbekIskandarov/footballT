import styles from "./style.module.scss";
import teamimage from "../../assets/images/teamimage.png";
import club from "../../assets/images/clublogoo.png";
function NewsCard() {
  return (
    <div className={styles.news_card}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.left}>
            <div className={styles.club_part}>
              <img src={club} alt="club logotip" />
              <span>BELARUS NT</span>
            </div>
            <span className={styles.vs}>vs</span>
            <div className={styles.club_part}>
              <img src={club} alt="club logotip" />
              <span>BELARUS NT</span>
            </div>

            <span className={styles.text}>JIzzax oliy ligadagi o’rnini saqlab qoldi</span>
          </div>
          <div className={styles.right}>
            <img src={teamimage} alt="team photos" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
