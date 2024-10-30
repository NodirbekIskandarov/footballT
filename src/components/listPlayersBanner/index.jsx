import React, { useEffect } from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import navigateicon from '../../assets/images/navigateIcon.png';
import clublogo from '../../assets/images/clublogoo.png';
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import

function PlayersBanner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.banner} data-aos="fade-up"> {/* Yangi animatsiya */}
      <div className='container'>
        <div className={styles.banner_part}>
          <div className={styles.left} data-aos="fade-up"> {/* Yangi animatsiya */}
            <img src={clublogo} alt="club logosi" />
            <div className={styles.text_part}>
              <span>BELARUS NT</span>
              <span>16 players in application</span>
              <span>27.17 - average age</span>
            </div>
          </div>
          <div className={styles.button_part} data-aos="fade-up"> {/* Yangi animatsiya */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <button>
                View team profile <img src={navigateicon} alt="navigate iconkasi" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayersBanner;
