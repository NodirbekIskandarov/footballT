import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { planedbyleague } from "../../utils/API_urls";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import clublogo from '../../assets/images/club-logo2.jpg'

function GamesTournamentPlaned() {
  const navigate = useNavigate()
  const [data, setData] = useState(null);
  const { id } = useParams();
  const { i18n } = useTranslation()
  const lng = i18n.language

  useEffect(() => {
    getRequest(`${planedbyleague}${id}`)
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
  function navigateFunc(id) {
    navigate(`/players/${id}`)
  }
  function navigateFunc2(id) {
    navigate(`/preview/previ/${id}`)
  }
  return (
    <div className={styles.games}>
      <div className="container">
        {data?.matches?.map((item, index) => {
          return (
            <div
              className={styles.table}
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Delay for staggered animation
            >
              <span className={styles.sana}>{item?.time}</span>
              <div className={styles.table_part}>
                <div className={styles.left} onClick={() => navigateFunc(item?.team1?.uuid)} style={{ cursor: "pointer" }}>
                  <div className={styles.image_part}>
                    <img src={item?.team1?.icon_url ?? clublogo} alt="team1 logo" />
                  </div>
                  <div className={styles.name_part}>{item?.team1[`name_${lng}`]}</div>
                </div>
                <div className={styles.shot} onClick={() => navigateFunc2(item?.uuid)} style={{ cursor: "pointer" }}>V</div>
                <div className={styles.right} onClick={() => navigateFunc(item?.team2?.uuid)} style={{ cursor: "pointer" }}>
                  <div className={styles.name_part}>{item?.team2[`name_${lng}`]}</div>
                  <div className={styles.image_part}>
                    <img src={item?.team2?.icon_url ?? clublogo} alt="team2 logo" />
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
