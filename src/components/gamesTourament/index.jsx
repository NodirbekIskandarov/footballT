import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { matchbyleague } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import
import { useTranslation } from "react-i18next";

function GamesTournament() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const {i18n} = useTranslation()
  const lng = i18n.language

  useEffect(() => {
    AOS.init({
      duration: 800, // Animatsiya davomiyligi
      once: true,    // Faqat bir marta animatsiya
    });
    
    getRequest(`${matchbyleague}${id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className={styles.games}>
      <div className="container">
        {data?.passed?.map((item, index) => {
          return (
            <div className={styles.table} key={index} data-aos="fade-up"> {/* Animatsiya qo'shish */}
              <span className={styles.sana}>{formatDateToYMD(item?.date)}</span>
              <div className={styles.table_part}>
                <div className={styles.left}>
                  <div className={styles.image_part}>
                    <img src={item?.team1?.icon_url} alt={`logo`} />
                  </div>
                  <div className={styles.name_part}>{item?.team1[`name_${lng}`]}</div>
                </div>
                <div className={styles.shot}>
                  {item?.score?.team1_score}:{item?.score?.team2_score}
                </div>
                <div className={styles.right}>
                  <div className={styles.name_part}>{item?.team2[`name_${lng}`]}</div>
                  <div className={styles.image_part}>
                    <img src={item?.team2?.icon_url} alt={` logo`} />
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

export default GamesTournament;
