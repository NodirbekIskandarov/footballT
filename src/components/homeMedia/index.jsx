import { useEffect, useState } from "react";
import styles from "./homeMedia.module.scss";
import { getRequest } from "../../utils/request";
import { last_media } from "../../utils/API_urls";

function HomeMedia() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getRequest(last_media)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.homeMedia}>
      <div className="container">
        <div className={styles.videos}>
          {data?.videos?.map((item, index) => {
            return (
              <a
                href={item?.link} // Dynamic link from data
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={styles.videoLink}
              >
                <div className={styles.video}>
                  <img src={item?.photo} alt="video thumbnail" />
                  <b className={styles.playicon}>▶</b>
                  <span>{item?.description}</span>
                </div>
              </a>
            );
          })}
        </div>
        <div className={styles.images}>
          {data?.photos?.map((item, index) => {
            return (
              <div className={styles.image} key={index}>
                <img src={item?.photo} alt={item?.description} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeMedia;
