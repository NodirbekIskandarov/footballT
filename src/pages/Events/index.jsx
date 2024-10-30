import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { match_detail } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";
function Events() {
  const {t} = useTranslation()
  const [data, setData] = useState(null);
  const pk = useParams();
  useEffect(() => {
    getRequest(`${match_detail}${pk.id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pk.id]);

  const team1 = data?.team1?.uuid;
  const team2 = data?.team2?.uuid;

  return (
    <div className={styles.events}>
      <div className="container">
        <div className={styles?.clubs}>
          <div className={styles.club}>
            <img src={data?.team1?.icon_url} alt="team1logotip" />
            <span>{data?.team1?.name}</span>
          </div>
          <div className={styles.title}>
            <span>{t("match events")}</span>
          </div>
          <div className={styles.club}>
            <span>{data?.team2?.name}</span>
            <img src={data?.team2?.icon_url} alt="logotip2" />
          </div>
        </div>

        <div className={styles.events_part}>
          <div className={styles.timeline}>
            {data?.events?.map((item, index) => {
              return (
                <div className={styles.tr} key={index}>
                  <div className={styles.player}>
                    <span>
                      {item?.team == team1 ? item?.player_name : ""}{" "}
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
                      {item?.team == team2 ? item?.player_name : ""}{" "}
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
