import styles from "./style.module.scss";
import top from "../../assets/images/top.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { match_detail } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";
import { useTranslation } from "react-i18next";
function PreviewC() {
  const {t} = useTranslation()
  const pk = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    getRequest(`${match_detail}${pk.id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pk.id]);
  return (
    <div className={styles.preview}>
      <div className="container">
        <div className={styles.one}>
          <div className={styles.club}>
            <img src={data?.team1?.icon_url} alt="clublogo" />
            <span>{data?.team1?.name}</span>
          </div>
          {/* <span className={styles.center_text}>Tournament position</span> */}
          <div className={styles.club}>
            <span>{data?.team2?.name}</span>
            <img src={data?.team2?.icon_url} alt="clublogo" />
          </div>
        </div>
        <div className={styles.two}>
          {/* <div className={styles.left}>
                        <span>Place in the table </span>
                        <span>5</span>
                        <div className={styles.line}></div>
                        <span className={styles.uch}>Players av. age</span>
                        <span className={styles.turt}>28.8</span>
                    </div> */}
          <div className={styles.middle}>
            <div className={styles.boxes}>
              <span>{data?.total_goals_in_season?.team1_goals}</span>
              <div className={styles.box}>
                <img src={top} alt="top" />
                <span>Goals scored</span>
              </div>
              <span>{data?.total_goals_in_season?.team2_goals}</span>
            </div>
          </div>
          {/* <div className={styles.right}>
                        <span>Place in the table </span>
                        <span>5</span>
                        <div className={styles.line}></div>
                        <span className={styles.uch}>Players av. age</span>
                        <span className={styles.turt}>28.8</span>
                    </div> */}
        </div>
        {/* <div className={styles.three}>
                    <div className={styles.left}>
                        <img src={player} alt="player" />
                        <div className={styles.text_part}>
                            <div className={styles.name}>Cherneyko Yevgeniy</div>
                            <div className={styles.score}>
                                <div className={styles.games}>
                                    <span>games</span>
                                    <span>20</span>
                                </div>
                                <div className={styles.goals}>
                                    <span>goals</span>
                                    <span>12</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <img src={krasovka} alt="krasovka" />
                        <span>Best scorer</span>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.text_part}>
                            <div className={styles.name}>Cherneyko Yevgeniy</div>
                            <div className={styles.score}>
                                <div className={styles.games}>
                                    <span>games</span>
                                    <span>20</span>
                                </div>
                                <div className={styles.goals}>
                                    <span>goals</span>
                                    <span>12</span>
                                </div>
                            </div>
                        </div>
                        <img src={player} alt="player" />
                    </div>
                </div> */}
        <div className={styles.four}>
          <span className={styles.title}>{t("MATCHES AGAINST EACH OTHER")}</span>
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
          {/* <div className={styles.middle}>
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
                    </div> */}
        </div>
        <div className={styles.five}>
          {data?.matches?.data?.map((item, index) => {
            return (
              <div className={styles.box} key={index}>
                <div className={styles.title}>
                  <span>{formatDateToYMD(item?.date)}</span>
                </div>
                <div className={styles.score_part}>
                  <div className={styles.club}>
                    <img src={item?.team1?.icon_url} alt="clublogo" />
                    <span>{item?.team1?.name}</span>
                  </div>
                  <div className={styles.shot}>
                    <span>{item?.score?.team1_score}:{item?.score?.team2_score}</span>
                  </div>
                  <div className={styles.club}>
                    <span>{item?.team2?.name}</span>
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
