import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { getRequest } from "../../utils/request";
import { gallery_photos } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";
function Photo() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getRequest(gallery_photos)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.photo}>
      <div className="container">
        <div className={styles.boxes}>
          {data?.map((item, index) => {
            return (
              <div className={styles.box} key={index}>
                <img src={item?.photo} alt="media photo" />
                <div className={styles.text}>
                  <span>{item?.description}</span>
                  <span>{formatDateToYMD(item?.updated_at)}</span>
                </div>
              </div>
            );
          })}
        </div>
        <button>See more video</button>
      </div>
    </div>
  );
}

export default Photo;
