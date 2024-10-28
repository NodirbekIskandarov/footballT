import styles from "./style.module.scss";
import banner from "../../assets/images/planedback.png";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { about_us } from "../../utils/API_urls";
function AboutUs() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getRequest(about_us)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.banner}>
          <img src={banner} alt="banner" />
        </div>
        <div className={styles.text_part}>
          <h3>Tashkilot haqida</h3>
          <span>{data?.description}</span>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
