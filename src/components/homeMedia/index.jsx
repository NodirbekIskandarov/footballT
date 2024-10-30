import { useEffect, useState } from "react";
import styles from "./homeMedia.module.scss";
import { getRequest } from "../../utils/request";
import { last_media } from "../../utils/API_urls";
import 'aos/dist/aos.css';
import AOS from 'aos';

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

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.homeMedia}>
      <div className="container">
        <div className={styles.videos}>
          {data?.videos?.map((item, index) => (
            <a
              href={item?.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={styles.videoLink}
              data-aos="fade-up" // AOS atributi
            >
              <div className={styles.video}>
                <img src={item?.photo} alt="video thumbnail" />
                <b className={styles.playicon}>▶</b>
                <span>{item?.description}</span>
              </div>
            </a>
          ))}
        </div>
        <div className={styles.images}>
          {data?.photos?.map((item, index) => (
            <div className={styles.image} key={index} data-aos="zoom-in"> {/* AOS atributi */}
              <img src={item?.photo} alt={item?.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeMedia;
