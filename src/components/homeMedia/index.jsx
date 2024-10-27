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
              <div className={styles.video} key={index}>
                <img src={item?.photo} alt="" />
                <span>14 August 2024, Wednesday </span>
                <span>Yunusobod SM</span>
                <span className={styles.boldroq}>Final OIL STAR vs  BMB</span>
              </div>
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
