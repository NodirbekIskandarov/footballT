import { Outlet } from "react-router-dom";
import { TournamentBanner } from "../../components";
import styles from "./style.module.scss";
export default function Tournament() {
  return (
    <div>
      <TournamentBanner />
      <div className={styles.menus}>
        <div className={styles.left}>Otkazilgan turnirlar</div>
        <div className={styles.right}>Rejalashtirilgan turnirlar</div>
      </div>
      <Outlet />
    </div>
  );
}
