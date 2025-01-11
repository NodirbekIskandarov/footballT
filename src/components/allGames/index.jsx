import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { allbyleague } from "../../utils/API_urls";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import clublogo from "../../assets/images/club-logo2.jpg";

function AllGamesComponent() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lng = i18n.language;
  useEffect(() => {
    getRequest(`${allbyleague}${id}`)
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
    navigate(`/players/${id}`);
  }
  function navigateFunc2(id) {
    navigate(`/preview/${id}/events`);
  }
  return (
    <div className={styles.games}>
      <div className="container">
        {data?.map((item, index) => {
          return (
            <div
              className={styles.table}
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Delay for staggered animation
            >
              <span className={styles.sana}>{item?.name}</span>
              <br />
              <span className={styles.sana}>{item?.date}</span>
              {item?.matches?.map((match, ind) => {
                return (
                  <div className={styles.table_part} key={ind}>
                    <div
                      className={styles.left}
                      onClick={() => navigateFunc(match?.team1?.uuid)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className={styles.image_part}>
                        <img
                          src={match?.team1?.icon_url ?? clublogo}
                          alt="team1 logo"
                        />
                      </div>
                      <div className={styles.name_part}>
                        {match?.team1[`name_${lng}`]}
                      </div>
                    </div>
                    <div
                      className={styles.shot}
                      onClick={() => navigateFunc2(match?.uuid)}
                      style={{ cursor: "pointer" }}
                    >
                      {match?.score?.team1_score}:{match?.score?.team2_score}
                    </div>
                    <div
                      className={styles.right}
                      onClick={() => navigateFunc(match?.team2?.uuid)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className={styles.name_part}>
                        {match?.team2[`name_${lng}`]}
                      </div>
                      <div className={styles.image_part}>
                        <img
                          src={match?.team2?.icon_url ?? clublogo}
                          alt="team2 logo"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllGamesComponent;
