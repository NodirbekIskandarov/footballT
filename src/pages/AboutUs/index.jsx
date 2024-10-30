import styles from "./style.module.scss";
import banner from "../../assets/images/planedback.png";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { about_us } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";
function AboutUs() {
  const {t} = useTranslation()
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
      <div className={styles.contact}>
        <div className="container">
          <div className={styles.boxes}>
            <div className={styles.text_part}>
              <span className={styles.one}>Biz bilan bo’g’lanib  savolaringizga javob oling</span>
              <br />
              <br />
              <span className={styles.two}>Aloqa nomeri</span>
              <br />
              <span className={styles.three}>+998945854512</span>
            </div>
            <div className={styles.form_part}>
              <input type="text" placeholder="F.I.SH"/>
              <input type="text" placeholder="Telefon raqam"/>
              <textarea name="" id="" placeholder="Message"></textarea>
              <button>{t("Yuborish")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
