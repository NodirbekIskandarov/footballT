import { Link, Outlet } from "react-router-dom";
import { TournamentBanner } from "../../components";
import styles from "./style.module.scss";
export default function Tournament() {
  return (
    <div>
      <TournamentBanner />
      <div className={styles.container}>
        <div className={styles.left}><Link className={styles.link} to="pasted">Otkazilgan turnirlar</Link></div>
        <div className={styles.right}><Link className={styles.link} to="planed">Rejalashtirilgan turnirlar</Link></div>
      </div>

      <Outlet />
    </div>
  );
}
