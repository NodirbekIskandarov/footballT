import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { all_news } from "../../utils/API_urls";
import "aos/dist/aos.css"; // AOS CSS import
import AOS from "aos"; // AOS import
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import clublogo from "../../assets/images/club-logo2.jpg";
function NewsCard() {
  const [data, setData] = useState(null);
  const { i18n } = useTranslation();
  const lng = i18n.language;
  const navigate = useNavigate();

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

  function navigateFunc(item) {
    if (item?.match?.is_active) {
      navigate(`/${item?.uuid}`);
    }
  }

  return (
    <div className={styles.news_card} data-aos="fade-left">
      {" "}
      {/* Yangi animatsiya */}
      <div className="container">
        {data?.map((item, index) => {
          return (
            <div
              className={styles.card}
              key={index}
              data-aos="fade-left"
              onClick={() => navigateFunc(item)}
              style={{ cursor: "pointer" }}
            >
              {" "}
              {/* Yangi animatsiya */}
              <div className={styles.left}>
                {item?.match?.is_active && (
                  <>
                    <div className={styles.club_part}>
                      <img
                        src={item?.match?.team1?.icon_url ?? clublogo}
                        alt="club logotip"
                      />
                      {/* <span>{item?.match?.team1[`name_${lng}`]}</span> */}
                    </div>
                    <span className={styles.vs}>vs</span>
                    <div className={styles.club_part}>
                      <img
                        src={item?.match?.team2?.icon_url ?? clublogo}
                        alt="club logotip"
                      />
                      {/* <span>{item?.match?.team2[`name_${lng}`]}</span> */}
                    </div>
                  </>
                )}
                <span className={styles.text}>{item[`title_${lng}`]}</span>
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
