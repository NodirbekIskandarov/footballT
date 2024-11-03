import styles from "./style.module.scss";
import top from "../../assets/images/top.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { match_detail } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css"; // AOS CSS import
import AOS from "aos"; // AOS import

function PreviewC() {
  const { t, i18n } = useTranslation();
  const pk = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const lng = i18n.language
  useEffect(() => {
    getRequest(`${match_detail}${pk.id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [pk.id]);
  function navigateFunc(id) {
    navigate(`/players/${id}`);
  }
  return (
    <div className={styles.preview} data-aos="fade-up">
      {" "}
      {/* Yangi animatsiya */}
      <div className="container">
        <div className={styles.one} data-aos="fade-up">
          {" "}
          {/* Yangi animatsiya */}
          <div
            className={styles.club}
            onClick={() => {
              navigateFunc(data?.team1?.uuid);
            }}
          >
            <img src={data?.team1?.icon_url} alt="clublogo" />
            <span>{data?.team1?.name}</span>
          </div>
          <div
            className={styles.club}
            onClick={() => {
              navigateFunc(data?.team2?.uuid);
            }}
          >
            <span>{data?.team2?.name}</span>
            <img src={data?.team2?.icon_url} alt="clublogo" />
          </div>
        </div>
        <div className={styles.two} data-aos="fade-up">
          {" "}
          {/* Yangi animatsiya */}
          <div className={styles.middle}>
            <div className={styles.boxes}>
              <span style={{marginLeft: "50px"}}>{data?.total_goals_in_season?.team1_goals}</span>
              <div className={styles.box}>
                <img src={top} alt="top" />
                <span>{t("Goals scored")}</span>
              </div>
              <span style={{marginRight: "50px"}}>{data?.total_goals_in_season?.team2_goals}</span>
            </div>
          </div>
        </div>
        <div className={styles.four} data-aos="fade-up">
          {" "}
          {/* Yangi animatsiya */}
          <span className={styles.title}>
            {t("MATCHES AGAINST EACH OTHER")}
          </span>
          <div className={styles.scores}>
            <div className={styles.all}>
              <span>{t("WIN")}</span>
              <span>{data?.matches?.team_1_wins}</span>
            </div>
            <div className={styles.home}>
              <span>{t("DRAW")}</span>
              <span>{data?.matches?.draws}</span>
            </div>
            <div className={styles.away}>
              <span>{t("WIN")}</span>
              <span>{data?.matches?.team_2_wins}</span>
            </div>
          </div>
        </div>
        <div className={styles.five} data-aos="fade-up">
          {" "}
          {/* Yangi animatsiya */}
          {data?.matches?.data?.map((item, index) => {
            return (
              <div className={styles.box} key={index}>
                <div className={styles.title}>
                  <span>{formatDateToYMD(item?.date)}</span>
                </div>
                <div className={styles.score_part}>
                  <div
                    className={styles.club}
                    onClick={() => {
                      navigateFunc(data?.team1?.uuid);
                    }}
                  >
                    <img src={item?.team1?.icon_url} alt="clublogo" />
                    <span>{item?.team1[`name_${lng}`]}</span>
                  </div>
                  <div className={styles.shot}>
                    <span>
                      {item?.score?.team1_score}:{item?.score?.team2_score}
                    </span>
                  </div>
                  <div
                    className={styles.club}
                    onClick={() => {
                      navigateFunc(data?.team2?.uuid);
                    }}
                  >
                    <span>{item?.team2[`name_${lng}`]}</span>
                    <img src={item?.team2?.icon_url} alt="clublogo" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PreviewC;
