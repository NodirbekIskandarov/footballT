import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { Link, useParams } from 'react-router-dom';
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import
import { getRequest } from '../../utils/request';
import { playerbyteam } from '../../utils/API_urls';
import { useTranslation } from 'react-i18next';

function PlayersBanner() {
  const [data, setData] = useState(null)
  const {id} = useParams()
  const {i18n} = useTranslation()
  const lng = i18n.language
  useEffect(() => {
    getRequest(playerbyteam+id)
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

  return (
    <div className={styles.banner} data-aos="fade-up"> {/* Yangi animatsiya */}
      <div className='container'>
        <div className={styles.banner_part}>
          <div className={styles.left} data-aos="fade-up"> {/* Yangi animatsiya */}
            <img src={data?.icon} alt="club logosi" />
            <div className={styles.text_part}>
              <span>{data[`name_${lng}`]}</span>
              <span>{data?.players?.count} players </span>
              <span>{data?.coach[`name_${lng}`]}</span>
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
