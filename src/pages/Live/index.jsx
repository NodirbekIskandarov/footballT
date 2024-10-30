import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { useTranslation } from 'react-i18next';
import { getRequest } from '../../utils/request';
import { match_detail } from '../../utils/API_urls';
import { useParams } from 'react-router-dom';

function Live() {
  const {t} = useTranslation()
  const [data, setData] = useState(null);
  const pk = useParams();
  useEffect(() => {
    getRequest(`${match_detail}${pk.id}`)
      .then((response) => {
        // console.log(response?.data, "live");
        setData(response?.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pk.id]);
  return (
    <div className={styles.live}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.clubs}>
            <div className={styles.club}>
              <img src={data?.team1?.icon_url} alt="" />
              <span>{data?.team1?.name}</span>
            </div>
            <div className={styles.club}>
              <span>{data?.team2?.name}</span>
              <img src={data?.team2?.icon_url} alt="" />
            </div>
          </div>
          <div className={styles.card}>
          <a
              href={data?.live_link} // Dynamic link for each video
              target="_blank"
              rel="noopener noreferrer"
              key={1}
              className={styles.boxLink}
            >
              <div className={styles.box}>
                <img src='' alt="media photo" />
                <b className={styles.playicon}>▶</b> {/* Play icon */}
                <div className={styles.text}>
                  <span>;;;</span>
                  <span>ksjdb</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Live