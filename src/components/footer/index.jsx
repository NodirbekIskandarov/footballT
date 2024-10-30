import styles from './footer.module.scss';
import logotip from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import instagram from '../../assets/images/instagram.png';
import telegram from '../../assets/images/telegram.png';
import facebook from '../../assets/images/facebook.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_child}>
          <div className={styles.logo_part}>
            <div className={styles.line_}></div>
            <div className={styles.logotip}>
              <a href="/"><img src={logotip} alt="logo" /></a>
            </div>
            <div className={styles.line__}></div>
          </div>
          <div className={styles.menus}>
            <Link className={styles.link} to="/">{t("Home")}</Link>
            <div className={styles.tournament} onClick={toggleSubmenu}>
              <span className={styles.link}>{t("Tournaments")}</span>
              {submenuOpen && (
                <div className={styles.submenu}>
                  <Link className={styles.submenu_link} to="/tournament/upcoming">Upcoming</Link>
                  <Link className={styles.submenu_link} to="/tournament/past">Past Tournaments</Link>
                  <Link className={styles.submenu_link} to="/tournament/rules">Tournament Rules</Link>
                </div>
              )}
            </div>
            <Link className={styles.link} to="/news">{t("News")}</Link>
            <Link className={styles.link} to="/media">{t("Media")}</Link>
            <Link className={styles.link} to="/">{t("History")}</Link>
            <Link className={styles.link} to="/about-us">{t("About us")}</Link>
          </div>
          <div className={styles.socials}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <img src={telegram} alt="Telegram" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
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
