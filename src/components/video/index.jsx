import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { gallery_videos } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";
import { useTranslation } from "react-i18next";
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import

function Video() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState(null);
  const lng = i18n.language

  useEffect(() => {
    getRequest(gallery_videos)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.video}>
      <div className="container">
        <div className={styles.boxes}>
          {data?.map((item, index) => {
            return (
              <a
                href={item?.link} // Dynamic link for each video
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={styles.boxLink}
              >
                <div className={styles.box} data-aos="zoom-in"> {/* Yangi animatsiya */}
                  <img src={item?.photo} alt="media photo" />
                  <b className={styles.playicon}>▶</b> {/* Play icon */}
                  <div className={styles.text}>
                    <span>{item[`description_${lng}`]}</span>
                    <span>{formatDateToYMD(item?.updated_at)}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <button>{t("See more video")}</button>
      </div>
    </div>
  );
}

export default Video;
