import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { PreviewBanner } from "../../components";
import styles from './style.module.scss';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { match_detail } from "../../utils/API_urls";
import { getRequest } from "../../utils/request";

function Preview() {
  const location = useLocation();
  const { id } = useParams(); // Get the id from the URL params
  const { t } = useTranslation()
  const [data, setData] = useState(null);
  useEffect(() => {
    getRequest(`${match_detail}${id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <PreviewBanner />
      <div className={styles.backimage}>
        <div className="container">
          <div className={styles.links_part}>
            <Link to={`/preview/previ/${id}`} className={styles.link}>
              <button
                style={{
                  color: location.pathname.includes("preview/previ") ? "#295FA7" : "#FFFFFF",
                  backgroundColor: location.pathname.includes("preview/previ") ? "#FFFFFF" : "#295FA7"
                }}
              >{t("Preview")}</button>
            </Link>
            {/* <Link to={`/preview/protocol/${id}`} className={styles.link}>
              <button
                style={{
                  color: location.pathname.includes("protocol") ? "#295FA7" : "#FFFFFF",
                  backgroundColor: location.pathname.includes("protocol") ? "#FFFFFF" : "#295FA7"
                }}
              >Protocol</button>
            </Link> */}
            <Link to={`/preview/events/${id}`} className={styles.link}>
              <button
                style={{
                  color: location.pathname.includes("events") ? "#295FA7" : "#FFFFFF",
                  backgroundColor: location.pathname.includes("events") ? "#FFFFFF" : "#295FA7"
                }}
              >{t("Events")}</button>
            </Link>
            {/* <Link to={`/preview/live/${id}`} className={styles.link}> */}
            <a href={data?.live_link} target="_blank"
              rel="noopener noreferrer" className={styles.link}><button
                style={{
                  color: location.pathname.includes("live") ? "#295FA7" : "#FFFFFF",
                  backgroundColor: location.pathname.includes("live") ? "#FFFFFF" : "#295FA7"
                }}
              >Live</button></a>

            {/* </Link> */}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Preview;
