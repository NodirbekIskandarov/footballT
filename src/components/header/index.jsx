import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./header.module.scss";
import logo from "../../assets/images/logo.png";
import { getRequest } from "../../utils/request";
import { sub_tournament_list, tournament_list } from "../../utils/API_urls";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [subsubmenuOpen, setSubsubmenuOpen] = useState(false);
  const [data, setData] = useState(null);
  const [subsubmenulist, setSubsubmenulist] = useState([]);
  const { t, i18n } = useTranslation();
  const [activeMenu, setActiveMenu] = useState("");
  const menuRef = useRef(null); // Reference for outside click detection

  // Toggle main menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSubmenuOpen(false);
    setSubsubmenuOpen(false);
  };

  // Toggle submenu
  const toggleSubmenu = () => {
    setSubmenuOpen((prev) => !prev);
    setSubsubmenuOpen(false);
  };

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSubmenuOpen(false);
        setSubsubmenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch tournament data on component mount
  useEffect(() => {
    getRequest(tournament_list)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Handle menu item click
  const handleClick = (menu) => {
    setActiveMenu(menu);
    setMenuOpen(false);
    setSubmenuOpen(false);
    setSubsubmenuOpen(false);
  };

  // Fetch submenu data when a submenu item is clicked
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
              <div className={styles.tournament} onClick={toggleSubmenu}>
                <span
                  className={`${styles.link} ${
                    activeMenu === "tournaments" ? styles.active : ""
                  }`}
                >
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
