

import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { matchbyleague } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import
import { useTranslation } from "react-i18next";

function GamesTournament() {
  const navigate = useNavigate()
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    getRequest(`${matchbyleague}${id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load data."); // Set error message
      })
      .finally(() => {
        setLoading(false); // Set loading to false once the request completes
      });
  }, [id]);

  if (loading) return <div>Loading...</div>; // Loading feedback
  if (error) return <div>{error}</div>; // Error feedback

  function navigateFunc (id) {
      navigate(`/players/${id}`)
  }
  function navigateFunc2 (id) {
    navigate(`/preview/previ/${id}`)
  }
  return (
    <div className={styles.games}>
      <div className="container">
        {data?.passed?.map((item) => (
          <div className={styles.table} key={item.id} data-aos="fade-up">
            <span className={styles.sana}>{formatDateToYMD(item?.date)}</span>
            <div className={styles.table_part}>
              <div className={styles.left} onClick={() => navigateFunc(item?.team1?.uuid)} style={{cursor: "pointer"}}>
                <div className={styles.image_part}>
                  <img src={item?.team1?.icon_url} alt={`logo`} />
                </div>
                <div className={styles.name_part}>{item?.team1[`name_${lng}`]}</div>
              </div>
              <div className={styles.shot} onClick={() => navigateFunc2(item?.uuid)} style={{cursor: "pointer"}}>
                {item?.score?.team1_score}:{item?.score?.team2_score}
              </div>
              <div className={styles.right} onClick={() => navigateFunc(item?.team2?.uuid)} style={{cursor: "pointer"}}>
                <div className={styles.name_part}>{item?.team2[`name_${lng}`]}</div>
                <div className={styles.image_part}>
                  <img src={item?.team2?.icon_url} alt={`logo`} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesTournament;
