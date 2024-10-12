import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import styles from './header.module.scss'
function Header() {
  return (
   <div className={styles.header}>
      <div className="container">
        <div className={styles.header_main}>
          <div className={styles.img_part}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.menu_part}>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Header