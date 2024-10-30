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
  const [menuOpen, setMenuOpen] = useState(false); // State for menu open/close
  const [submenuOpen, setSubmenuOpen] = useState(false); // State for submenu open/close
  const [data, setData] = useState(null);
  const { t, i18n } = useTranslation()
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggles menu open/close
    setSubmenuOpen(false); // Close submenu when main menu is toggled
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen); // Toggles submenu open/close
  };

  const handleClick = () => {
    setMenuOpen(false);
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

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage); // Change the language using i18n
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_main}>
          <div className={styles.img_part}>
            <img src={logo} alt="logo" />
          </div>

          <FaBars className={styles.hamburger} onClick={toggleMenu} />

          <div
            className={`${styles.menu_part} ${menuOpen ? styles.menu_open : ""
              }`}
          >
            <FaTimes className={styles.close_icon} onClick={toggleMenu} />
            <Link className={styles.link} to="/" onClick={handleClick}>
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
                        to="/tounament"
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
            <Link className={styles.link} to="/news" onClick={handleClick}>
              {t("News")}
            </Link>
            <Link className={styles.link} to="/media" onClick={handleClick}>
              {t("Media")}
            </Link>
            <Link className={styles.link} to="/" onClick={handleClick}>
              {t("History")}
            </Link>
            <Link className={styles.link} to="/about-us" onClick={handleClick}>
              {t("About us")}
            </Link>
          </div>

          <div className={styles.language_part}>
            <select
              defaultValue="uz"
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
  );
}

export default Header;
