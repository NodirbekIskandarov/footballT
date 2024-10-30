import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { matchbyleague } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";
import AOS from "aos";
import "aos/dist/aos.css";

function GamesTournamentPlaned() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRequest(`${matchbyleague}${id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.games}>
      <div className="container">
        {data?.expect?.map((item, index) => {
          return (
            <div
              className={styles.table}
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Delay for staggered animation
            >
              <span className={styles.sana}>{formatDateToYMD(item?.date)}</span>
              <div className={styles.table_part}>
                <div className={styles.left}>
                  <div className={styles.image_part}>
                    <img src={item?.team1?.icon_url} alt="team1 logo" />
                  </div>
                  <div className={styles.name_part}>{item?.team1?.name}</div>
                </div>
                <div className={styles.shot}>V</div>
                <div className={styles.right}>
                  <div className={styles.name_part}>{item?.team2?.name}</div>
                  <div className={styles.image_part}>
                    <img src={item?.team2?.icon_url} alt="team2 logo" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GamesTournamentPlaned;
