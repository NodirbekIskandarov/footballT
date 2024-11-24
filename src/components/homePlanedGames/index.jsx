import styles from "./style.module.scss";
import { IoTimeOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { expected_games } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";
import { useTranslation } from "react-i18next";
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import
import { useNavigate } from "react-router-dom";
import clublogo from '../../assets/images/club-logo2.jpg'

function HomePlanedGames() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  function navigateFunc(id) {
    navigate(`/preview/previ/${id}`)
  }
  const lng = i18n.language
  useEffect(() => {
    getRequest(expected_games)
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
  }, []);

  function navigateFuncc(id) {
    navigate(`/players/${id}`)
  }

  return (
    <div className="container">
      <div className={styles.planed_games}>
        {data?.map((item, index) => {
          return (
            <div className={styles.game} key={index} data-aos="fade-up"> {/* Yangi animatsiya */}
              <div className={styles.clubs}>
                <div className={styles.single_club} onClick={() => navigateFuncc(item?.team1?.uuid)}>
                  <img src={item?.team1?.icon_url ?? clublogo} alt="club-logotip" />
                  <span>{item?.team1[`name_${lng}`]}</span>
                </div>
                <span>VS</span>
                <div className={styles.single_club} onClick={() => navigateFuncc(item?.team2?.uuid)}>
                  <img src={item?.team2?.icon_url ?? clublogo} alt="club-logotip" />
                  <span>{item?.team2[`name_${lng}`]}</span> {/* Team2 nomi to'g'ri berilsin */}
                </div>
              </div>
              <div className={styles.date}>
                <div className={styles.time}>
                  <IoTimeOutline />
                  <span>{formatDateToYMD(item?.date)}</span>
                </div>
              </div>
              <div className={styles.details}>
                <div className={styles.fav}>
                  {/* <MdFavoriteBorder /> */}
                </div>
                <div className={styles.view} onClick={() => navigateFunc(item?.uuid)} style={{ cursor: "pointer" }}>
                  <span>{t("View Details")}</span>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePlanedGames;
