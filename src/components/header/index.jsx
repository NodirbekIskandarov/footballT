

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./header.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { getRequest } from "../../utils/request";
import { tournament_list } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [data, setData] = useState(null);
  const { t, i18n } = useTranslation();
  const [activeMenu, setActiveMenu] = useState(""); // State to track active menu item

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSubmenuOpen(false);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleClick = (menu) => {
    setActiveMenu(menu); // Set the active menu item
    setMenuOpen(false);
    setSubmenuOpen(false);
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

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_main}>
          <div className={styles.img_part}>
            <a href="/"><img src={logo} alt="logo" /></a>
          </div>
          <div className={styles.father}>
          <FaBars className={styles.hamburger} onClick={toggleMenu} />
            <div className={`${styles.menu_part} ${menuOpen ? styles.menu_open : ""}`}>
              <FaTimes className={styles.close_icon} onClick={toggleMenu} />
              <Link className={`${styles.link} ${activeMenu === "home" ? styles.active : ""}`} to="/" onClick={() => handleClick("home")}>
                {t("Home")}
              </Link>
              <div className={styles.tournament} onClick={toggleSubmenu}>
                <span className={`${styles.link} ${activeMenu === "tournaments" ? styles.active : ""}`}>
                  {t("Tournaments")}{" "}
                  {submenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
                {submenuOpen && (
                  <div className={styles.submenu}>
                    {data?.map((item) => (
                      <Link
                        className={styles.submenu_link}
                        to={`/tournament/pasted/${item?.uuid}`}
                        onClick={() => handleClick(item.name)}
                        key={item.uuid}
                      >
                        {item[`name_${i18n.language}`]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link className={`${styles.link} ${activeMenu === "news" ? styles.active : ""}`} to="/news" onClick={() => handleClick("news")}>
                {t("News")}
              </Link>
              <Link className={`${styles.link} ${activeMenu === "media" ? styles.active : ""}`} to="/media" onClick={() => handleClick("media")}>
                {t("Media")}
              </Link>
              <Link className={`${styles.link} ${activeMenu === "best-players" ? styles.active : ""}`} to="/best-players" onClick={() => handleClick("best-players")}>
                {t("History")}
              </Link>
              <Link className={`${styles.link} ${activeMenu === "about-us" ? styles.active : ""}`} to="/about-us" onClick={() => handleClick("about-us")}>
                {t("About us")}
              </Link>
            </div>

            <div className={styles.language_part}>
              <select defaultValue={i18n.language} onChange={handleLanguageChange}>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default Header;
