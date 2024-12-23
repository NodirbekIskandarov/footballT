import styles from './style.module.scss';
import stadion from '../../assets/images/stadionicon.png';
import top from '../../assets/images/top.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRequest } from '../../utils/request';
import { about_player } from '../../utils/API_urls';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import
import playerdefault from '../../assets/images/defaultplayerimage.jpg'

function PlayerBanner() {
  const { t, i18n } = useTranslation();
  const pk = useParams();
  const [data, setData] = useState(null);
  const lng = i18n.language
  useEffect(() => {
    getRequest(`${about_player}${pk.id}`)
      .then(response => {
        setData(response?.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [pk.id]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const name =
    lng === "uz"
      ? data?.name_uz
      : lng === "ru"
        ? data?.name_ru
        : data?.name_en;

  const teamname =
    lng === "uz"
      ? data?.current_team?.name_uz
      : lng === "ru"
        ? data?.current_team?.name_ru
        : data?.current_team?.name_en;
  return (
    <div className={styles.player_banner}>
      <div className='container'>
        <div className={styles.image_part} data-aos="fade-right"> {/* Animatsiya qo'shish */}
          <div className={styles.image}>
            <img src={data?.image ?? playerdefault} alt="player detail image" />
          </div>
          <div className={styles.right}>
            <span className={styles.name}>{name}</span>
            <div className={styles.date}>
              <span>{t("Date of birth")}:</span>
              <span>{data?.birthday}</span>
            </div>
            <div className={styles.age}>
              <span>{t("Age")}:</span>
              <span>{data?.age} {t("years")}</span>
            </div>
            <div className={styles.club}>
              <span>{t("Club")}:</span>
              <span>{teamname}</span>
            </div>
            <div className={styles.scores}>
              <div><img src={stadion} alt="stadion icon" /><span>{data?.events?.assists}</span></div>
              <div><img src={top} alt="krasovka icon" /><span>{data?.events?.goals}</span></div>
              <div><div className={styles.yellow}></div><span>{data?.events?.yellows}</span></div>
              <div><div className={styles.red}></div><span>{data?.events?.reds}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerBanner;
