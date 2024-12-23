import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { getRequest } from "../../utils/request";
import { gallery_photos } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";
import { useTranslation } from "react-i18next";
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import

function Photo() {
  const [data, setData] = useState(null);
  const { t, i18n } = useTranslation();
  const lng = i18n.language

  useEffect(() => {
    getRequest(gallery_photos)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleClick() {
    getRequest(`${gallery_photos}?size=100`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.photo}>
      <div className="container">
        <div className={styles.boxes}>
          {data?.map((item, index) => (
            <div className={styles.box} key={index} data-aos="fade-up"> {/* Yangi animatsiya */}
              <img src={item?.photo} alt="media photo" />
              <div className={styles.text}>
                <span>{item[`description_${lng}`]}</span>
                <span>{formatDateToYMD(item?.updated_at)}</span>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleClick}>{t("See more photo")}</button>
      </div>
    </div>
  );
}

export default Photo;
