import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { gallery_videos } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";
import { useTranslation } from "react-i18next";
function Video() {
  const {t} = useTranslation()
  const [data, setData] = useState(null);
  useEffect(() => {
    getRequest(gallery_videos)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
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
              <div className={styles.box}>
                <img src={item?.photo} alt="media photo" />
                <b className={styles.playicon}>▶</b> {/* Play icon */}
                <div className={styles.text}>
                  <span>{item?.description}</span>
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
