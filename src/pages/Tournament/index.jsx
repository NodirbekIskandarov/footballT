import { Link, Outlet, useParams } from "react-router-dom";
import { TournamentBanner } from "../../components";
import styles from "./style.module.scss";
export default function Tournament() {
  const {id} = useParams()
  return (
    <div>
      <TournamentBanner />
      <div className={styles.container}>
        <div className={styles.left}><Link className={styles.link} to={`/tournament/pasted/${id}`}>Otkazilgan turnirlar</Link></div>
        <div className={styles.right}><Link className={styles.link} to={`/tournament/planed/${id}`}>Rejalashtirilgan turnirlar</Link></div>
      </div>
      <Outlet />
    </div>
  );
}
