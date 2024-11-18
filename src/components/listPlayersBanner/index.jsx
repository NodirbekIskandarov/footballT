import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { Link, useParams } from 'react-router-dom';
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import
import { getRequest } from '../../utils/request';
import { playerbyteam } from '../../utils/API_urls';
import { useTranslation } from 'react-i18next';
import clublogo from '../../assets/images/club-logo2.png'

function PlayersBanner() {
  const [data, setData] = useState(null)
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const lng = i18n.language
  useEffect(() => {
    getRequest(playerbyteam + id)
      .then(response => {
        setData(response?.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])
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
  const coachname =
    lng === "uz"
      ? data?.coach?.name_uz
      : lng === "ru"
        ? data?.coach?.name_ru
        : data?.coach?.name_en;

  return (
    <div className={styles.banner} data-aos="fade-up"> {/* Yangi animatsiya */}
      <div className='container'>
        <div className={styles.banner_part}>
          <div className={styles.left} data-aos="fade-up"> {/* Yangi animatsiya */}
            <img src={data?.icon ?? clublogo} alt="club logosi" />
            <div className={styles.text_part}>
              <span>{name}</span>
              <span>{data?.players?.count} {t("players")} </span>
              <span>{coachname}</span>
            </div>
          </div>
          <div className={styles.button_part} data-aos="fade-up"> {/* Yangi animatsiya */}
            <Link to="/" style={{ textDecoration: "none" }}>
              {/* <button>
                View team profile <img src={navigateicon} alt="navigate iconkasi" />
              </button> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayersBanner;
