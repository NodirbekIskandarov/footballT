import styles from "./style.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { getRequest } from "../../utils/request";
import { best_players } from "../../utils/API_urls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import
import { useTranslation } from "react-i18next";
import defaultimage from '../../assets/images/defaultplayerimage.jpg'
function BestPlayers() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [year, setYear] = useState("2024");
  const {t, i18n} = useTranslation()
  const lng = i18n.language

  useEffect(() => {
    getRequest(`${best_players}?year=${year}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [year]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  function navigateFunc(id) {
    navigate(`/about-player/${id}`);
  }

  return (
    <div className={styles.players}>
      <div className="container">
        <div className={styles.title_part}>
          <span>{t("Eng yaxshi futbolistlar")}</span>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>

        <div className={styles.boxes}>
          {data?.map((item, index) => {
            return (
              <div className={styles.box} key={index} data-aos="fade-up"> {/* Yangi animatsiya */}
                <img src={item?.image ?? defaultimage} alt="player" />
                <span className={styles.name}>{item[`name_${lng}`]}</span>
                <span className={styles.position}>{item.position[`position_${lng}`]}</span>
                <button onClick={() => navigateFunc(item?.uuid)}>
                  {t("View")} <FaArrowRightLong />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BestPlayers;
