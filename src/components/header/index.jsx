import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styles from './header.module.scss';
import { FaTimes, FaBars } from 'react-icons/fa'; // FaBars added for hamburger icon
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu open/close


  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggles menu open/close
  };

  function handleClick () {
    setMenuOpen(false)
  }

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_main}>
          <div className={styles.img_part}>
            <img src={logo} alt="logo" />
          </div>

          <FaBars className={styles.hamburger} onClick={toggleMenu} /> {/* Hamburger icon */}

          <div className={`${styles.menu_part} ${menuOpen ? styles.menu_open : ''}`}>
            <FaTimes className={styles.close_icon} onClick={toggleMenu} /> {/* Close icon for menu */}
            <Link className={styles.link} to="/" onClick={handleClick}>Home</Link>
            <Link className={styles.link} to="/tounament" onClick={handleClick}>Tournaments</Link>
            <Link className={styles.link} to="/news" onClick={handleClick}>News</Link>
            <Link className={styles.link} to="/media" onClick={handleClick}>Media</Link>
            <Link className={styles.link} to="/" onClick={handleClick}>History</Link>
            <Link className={styles.link} to="/about-us" onClick={handleClick}>About us</Link>
          </div>

          <div className={styles.language_part}>
            <select name="" id="">
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
