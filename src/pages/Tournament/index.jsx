import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { TournamentBanner } from "../../components";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

export default function Tournament() {
  const { id } = useParams();
  const location = useLocation();
  const {t} = useTranslation()

  const isPastedActive = location.pathname.includes("/pasted");
  const isPlanedActive = location.pathname.includes("/planed");
  const isAllActive = location.pathname.includes("/all");

  return (
    <div>
      <TournamentBanner />
      <div className={styles.container}>
        <div className={`${styles.left}`} style={{
          backgroundColor: isPastedActive ? "white" : "#295FA7"
          
        }}>
          <Link className={styles.link} to={`/tournament/pasted/${id}`} style={{color: isPastedActive ? "#295FA7" : "white"}}>{t("O'tkazilgan turnirlar")}</Link>
        </div>
        <div className={`${styles.right}`} style={{
          backgroundColor: isPlanedActive ? "white" : "#295FA7"
          
        }}>
          <Link className={styles.link} to={`/tournament/planed/${id}`} style={{color: isPlanedActive ? "#295FA7" : "white"}}>{t("Rejalashtirilgan turnirlar")}</Link>
        </div>
        <div className={`${styles.all}`} style={{
          backgroundColor: isAllActive ? "white" : "#295FA7"
          
        }}>
          <Link className={styles.link} to={`/tournament/all/${id}`} style={{color: isAllActive ? "#295FA7" : "white"}}>{t("Barcha turnirlar")}</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
