import styles from "./footer.module.scss";
import logotip from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getRequest } from "../../utils/request";
import { socials } from "../../utils/API_urls";
import BasicMenu from "../header/cod";
function Footer() {
  const { t } = useTranslation();
  const [socialss, setSocialss] = useState(null);

  useEffect(() => {
    getRequest(socials)
      .then((response) => {
        setSocialss(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_child}>
          <div className={styles.logo_part}>
            <div className={styles.line_}></div>
            <div className={styles.logotip}>
              <a href="/">
                <img src={logotip} alt="logo" />
              </a>
            </div>
            <div className={styles.line__}></div>
          </div>
          <div className={styles.menus}>
            <Link className={styles.link} to="/">
              {t("Home")}
            </Link>
            <BasicMenu />
            <Link className={styles.link} to="/news">
              {t("News")}
            </Link>
            <Link className={styles.link} to="/media">
              {t("Media")}
            </Link>
            <Link className={styles.link} to="/best-players">
              {t("History")}
            </Link>
            <Link className={styles.link} to="/about-us">
              {t("About us")}
            </Link>
          </div>
          <div className={styles.socials}>
            {socialss?.map((item, index) => {
              return (
                <div className={styles.social} key={index}>
                  <a
                    href={item?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item?.icon} alt={item?.name} />
                  </a>
                </div>
              );
            })}
          </div>
          <div className={styles.text}>
            <span>Super Leguage 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
