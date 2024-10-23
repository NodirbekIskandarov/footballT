import { Link, Outlet, useLocation } from "react-router-dom"
import { PreviewBanner } from "../../components"
import styles from './style.module.scss'
function Preview() {
  const location = useLocation()
  return (
    <div>
      <PreviewBanner />
      <div className={styles.links_part}>
        <Link to="/preview/previ" className={styles.link}><button
          style={{
            color: location.pathname.includes("preview/previ") ? "#295FA7" : "#FFFFFF",
            backgroundColor: location.pathname.includes("preview/previ") ? "#FFFFFF" : "#295FA7"
          }}
        >Preview</button></Link>
        <Link to='/preview/protocol' className={styles.link}><button
          style={{
            color: location.pathname.includes("protocol") ? "#295FA7" : "#FFFFFF",
            backgroundColor: location.pathname.includes("protocol") ? "#FFFFFF" : "#295FA7"
          }}
        >Protocol</button></Link>
        <Link to='/preview/events' className={styles.link}><button
          style={{
            color: location.pathname.includes("events") ? "#295FA7" : "#FFFFFF",
            backgroundColor: location.pathname.includes("events") ? "#FFFFFF" : "#295FA7"
          }}
        >Events</button></Link>
        <Link to='/preview/live' className={styles.link}><button
          style={{
            color: location.pathname.includes("live") ? "#295FA7" : "#FFFFFF",
            backgroundColor: location.pathname.includes("live") ? "#FFFFFF" : "#295FA7"
          }}
        >Live</button></Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Preview