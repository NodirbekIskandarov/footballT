import styles from './footer.module.scss'
import logotip from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import instagram from '../../assets/images/instagram.png'
import telegram from '../../assets/images/telegram.png'
import facebook from '../../assets/images/Facebook.png'
function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_child}>
            <div className={styles.logo_part}>
                <div className={styles.line_}></div>
                <div className={styles.logotip}><img src={logotip} alt="logotip" /></div>
                <div className={styles.line__}></div>
            </div>
            <div className={styles.menus}>
                <Link className={styles.link} to='/'>Home</Link>
                <Link className={styles.link} to='/tounament'>Tournaments </Link>
                <Link className={styles.link} to='/news'>News</Link>
                <Link className={styles.link} to='/media'>Media</Link>
                <Link className={styles.link} to='/'>History</Link>
                <Link className={styles.link} to='/about-us'>About us</Link>
            </div>
            <div className={styles.socials}>
              <div className={styles.social}>
                <img src={instagram} alt="instagram" />
              </div>
              <div className={styles.social}>
                <img src={telegram} alt="instagram" />
              </div>
              <div className={styles.social}>
                <img src={facebook} alt="instagram" />
              </div>
            </div>
            <div className={styles.text}>
              <span>Super Leguage 2024</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer