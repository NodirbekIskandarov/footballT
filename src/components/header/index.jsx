import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./header.module.scss";
import logo from "../../assets/images/logo.png";
import BasicMenu from "./cod";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [activeMenu, setActiveMenu] = useState("");
  const menuRef = useRef(null); // Reference for outside click detection

  // Toggle main menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle menu item click
  const handleClick = (menu) => {
    setActiveMenu(menu);
    setMenuOpen(false);
  };

  // Handle language change
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_main} ref={menuRef}>
          <div className={styles.img_part}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className={styles.father}>
            <FaBars className={styles.hamburger} onClick={toggleMenu} />
            <div
              className={`${styles.menu_part} ${
                menuOpen ? styles.menu_open : ""
              }`}
            >
              <FaTimes className={styles.close_icon} onClick={toggleMenu} />
              <Link
                className={`${styles.link} ${
                  activeMenu === "home" ? styles.active : ""
                }`}
                to="/"
                onClick={() => handleClick("home")}
              >
                {t("Home")}
              </Link>
              <BasicMenu />
              <Link
                className={`${styles.link} ${
                  activeMenu === "news" ? styles.active : ""
                }`}
                to="/news"
                onClick={() => handleClick("news")}
              >
                {t("News")}
              </Link>
              <Link
                className={`${styles.link} ${
                  activeMenu === "media" ? styles.active : ""
                }`}
                to="/media"
                onClick={() => handleClick("media")}
              >
                {t("Media")}
              </Link>
              <Link
                className={`${styles.link} ${
                  activeMenu === "best-players" ? styles.active : ""
                }`}
                to="/best-players"
                onClick={() => handleClick("best-players")}
              >
                {t("History")}
              </Link>
              <Link
                className={`${styles.link} ${
                  activeMenu === "about-us" ? styles.active : ""
                }`}
                to="/about-us"
                onClick={() => handleClick("about-us")}
              >
                {t("About us")}
              </Link>
            </div>
            <div className={styles.language_part}>
              <select
                defaultValue={i18n.language}
                onChange={handleLanguageChange}
              >
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
