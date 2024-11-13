import styles from "./footer.module.scss";
import logotip from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getRequest } from "../../utils/request";
import { socials, tournament_list } from "../../utils/API_urls";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Footer() {
  const { t } = useTranslation();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [data, setData] = useState(null);
  const [socialss, setSocialss] = useState(null);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleClick = () => {
    setSubmenuOpen(false); // Close submenu when a link is clicked
  };
  useEffect(() => {
    getRequest(tournament_list)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <div className={styles.tournament} onClick={toggleSubmenu}>
              <span className={styles.link}>
                {t("Tournaments")}{" "}
                {submenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
              {submenuOpen && (
                <div className={styles.submenu}>
                  {data?.map((item, index) => {
                    return (
                      <Link
                        className={styles.submenu_link}
                        to={`/tournament/pasted/${item?.uuid}`}
                        onClick={handleClick}
                        key={index}
                      >
                        {item?.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
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
