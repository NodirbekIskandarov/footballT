import styles from "./footer.module.scss";
import logotip from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getRequest } from "../../utils/request";
import { socials, sub_tournament_list, tournament_list } from "../../utils/API_urls";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Footer() {
  const { t, i18n } = useTranslation();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [data, setData] = useState(null);
  const [socialss, setSocialss] = useState(null);
  const [subsubmenulist, setSubsubmenulist] = useState([]);
  const [subsubmenuOpen, setSubsubmenuOpen] = useState(false);

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
  const handleMenuClick = (id) => {
    getRequest(sub_tournament_list + id)
      .then((response) => {
        if (response?.data.length > 0) {
          setSubsubmenulist(response?.data);
          setSubsubmenuOpen(true);
        } else {
          setSubsubmenulist([]);
          setSubsubmenuOpen(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                {data?.map((item) => (
                  <span
                    className={styles.submenu_link}
                    onClick={() => {
                      handleClick(item.name);
                      handleMenuClick(item.uuid);
                      setSubmenuOpen(false); // Submenu yopiladi
                      setSubsubmenuOpen(false); // Subsubmenu yopiladi
                    }}
                    key={item.uuid}
                  >
                    {item[`name_${i18n.language}`]}
                  </span>
                ))}
              </div>
              )}
              {subsubmenuOpen && (
                  <div className={styles.subsubmenu}>
                    {subsubmenulist?.map((item) => (
                      <Link
                        to={`/tournament/pasted/${item?.uuid}`}
                        className={styles.subsubmenu_link}
                        onClick={() => {
                          handleClick(item.name); // Aktiv menyu nomini o'rnating
                          setSubmenuOpen(false); // Submenu yopiladi
                          setSubsubmenuOpen(false); // Subsubmenu yopiladi
                        }}
                        key={item.uuid}
                      >
                        {item[`name_${i18n.language}`]}
                      </Link>
                    ))}
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
