import styles from './footer.module.scss';
import logotip from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import instagram from '../../assets/images/instagram.png';
import telegram from '../../assets/images/telegram.png';
import facebook from '../../assets/images/facebook.png';
import { useState } from 'react';

function Footer() {
  const [submenuOpen, setSubmenuOpen] = useState(false); // State to manage submenu visibility

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen); // Toggle submenu visibility
  };

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_child}>
          <div className={styles.logo_part}>
            <div className={styles.line_}></div>
            <div className={styles.logotip}>
              <img src={logotip} alt="logotip" />
            </div>
            <div className={styles.line__}></div>
          </div>
          <div className={styles.menus}>
            <Link className={styles.link} to="/">Home</Link>
            <div className={styles.tournament} onClick={toggleSubmenu}>
              <span className={styles.link}>Tournaments</span>
              {submenuOpen && (
                <div className={styles.submenu}>
                  <Link className={styles.submenu_link} to="/tournament/upcoming">Upcoming</Link>
                  <Link className={styles.submenu_link} to="/tournament/past">Past Tournaments</Link>
                  <Link className={styles.submenu_link} to="/tournament/rules">Tournament Rules</Link>
                </div>
              )}
            </div>
            <Link className={styles.link} to="/news">News</Link>
            <Link className={styles.link} to="/media">Media</Link>
            <Link className={styles.link} to="/">History</Link>
            <Link className={styles.link} to="/about-us">About us</Link>
          </div>
          <div className={styles.socials}>
            <div className={styles.social}>
              <img src={instagram} alt="instagram" />
            </div>
            <div className={styles.social}>
              <img src={telegram} alt="telegram" />
            </div>
            <div className={styles.social}>
              <img src={facebook} alt="facebook" />
            </div>
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