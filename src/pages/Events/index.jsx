import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { match_detail } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css"; // AOS CSS import
import AOS from "aos"; // AOS import
import clublogo from '../../assets/images/club-logo2.png'
function Events() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState(null);
  const pk = useParams();
  const navigate = useNavigate();
  const lng = i18n.language
  useEffect(() => {
    getRequest(`${match_detail}${pk.id}`)
      .then((response) => {
        setData(response?.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [pk.id]);

  const team1 = data?.team1?.uuid;
  const team2 = data?.team2?.uuid;
  function navigateFunc(id) {
    navigate(`/players/${id}`);
  }
  return (
    <div className={styles.events} data-aos="fade-left">
      {" "}
      {/* Yangi animatsiya */}
      <div className="container">
        <div className={styles?.clubs} data-aos="fade-left">
          {" "}
          {/* Yangi animatsiya */}
          <div
            className={styles.club}
            onClick={() => {
              navigateFunc(data?.team1?.uuid);
            }}
          >
            <img src={data?.team1?.icon_url ?? clublogo} alt="team1logotip" />
            <span>{data?.team1[`name_${lng}`]}</span>
          </div>
          <div className={styles.title}>
            <span>{t("match events")}</span>
          </div>
          <div
            className={styles.club}
            onClick={() => {
              navigateFunc(data?.team2?.uuid);
            }}
          >
            <span>{data?.team2[`name_${lng}`]}</span>
            <img src={data?.team2?.icon_url ?? clublogo} alt="logotip2" />
          </div>
        </div>

        <div className={styles.events_part}>
          <div className={styles.timeline}>
            {data?.events?.map((item, index) => {
              return (
                <div className={styles.tr} key={index} data-aos="fade-left">
                  {" "}
                  {/* Yangi animatsiya */}
                  <div className={styles.player}>
                    <span>
                      {/* shujoyi */}
                      {/* {item?.team == team1 ? item?.player[`name_${lng}`] : ""}{" "} */}
                      {item?.team == team1 &&
                        (item?.type === "goal"
                          ? "⚽️"
                          : item?.type === "red"
                            ? "🟥"
                            : item?.type === "yellow"
                              ? "🟨"
                              : item?.type === "assist"
                                ? "👟"
                                : "")}
                    </span>
                  </div>
                  <div className={styles.time}>
                    <span>{item?.time}&apos;</span>
                  </div>
                  <div className={styles.player}>
                    <span>
                      {/* {item?.team == team2 ? item?.player[`name_${lng}`] : ""}{" "} */}
                      {item?.team == team2 &&
                        (item?.type === "goal"
                          ? "⚽️"
                          : item?.type === "red"
                            ? "🟥"
                            : item?.type === "yellow"
                              ? "🟨"
                              : item?.type === "assist"
                                ? "👟"
                                : "")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
