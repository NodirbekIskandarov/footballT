import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { all_news } from "../../utils/API_urls";
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import

function NewsCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getRequest(all_news)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.news_card} data-aos="fade-left"> {/* Yangi animatsiya */}
      <div className="container">
        {data?.map((item, index) => {
          return (
            <div className={styles.card} key={index} data-aos="fade-left"> {/* Yangi animatsiya */}
              <div className={styles.left}>
                <div className={styles.club_part}>
                  <img src={item?.match?.team1?.icon_url} alt="club logotip" />
                  <span>{item?.match?.team1?.name}</span>
                </div>
                <span className={styles.vs}>vs</span>
                <div className={styles.club_part}>
                  <img src={item?.match?.team2?.icon_url} alt="club logotip" />
                  <span>{item?.match?.team2?.name}</span>
                </div>
                <span className={styles.text}>
                  {item?.body}
                </span>
              </div>
              <div className={styles.right}>
                <img src={item?.photo} alt="team photos" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsCard;
