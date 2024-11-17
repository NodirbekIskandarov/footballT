import styles from "./style.module.scss";
import banner from "../../assets/images/previewbanner.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { match_detail } from "../../utils/API_urls";
import { formatDateToHMS, formatDateToYMD } from "../../utils/dateFormat";
import { useTranslation } from "react-i18next";
function PreviewBanner() {
  const pk = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const {i18n} = useTranslation()
  const lng = i18n.language
  useEffect(() => {
    getRequest(`${match_detail}${pk.id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pk.id]);
  function navigateFunc(id) {
    navigate(`/players/${id}`);
  }
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.box}>
        <div className={styles.info_part}>
          <span className={styles.date}>{formatDateToYMD(data?.date)} </span>
          <div className={styles.location}>
            {/* <IoLocation color="red"/>
            <span>Yunusobod SM</span> */}
          </div>
          <span className={styles.time}>{formatDateToHMS(data?.date)}</span>
        </div>
        <div className={styles.club_part}>
          <div
            className={styles.club}
            onClick={() => {
              navigateFunc(data?.team1?.uuid);
            }}
          >
            <img src={data?.team1?.icon_url} alt="clublogo" />
            <span>{data?.team1[`name_${lng}`]}</span>
          </div>
          <span className={styles.shot}>
            {data?.score?.team1_score}:{data?.score?.team2_score}
          </span>
          <div
            className={styles.club}
            onClick={() => {
              navigateFunc(data?.team2?.uuid);
            }}
          >
            <img src={data?.team2?.icon_url} alt="clublogo" />
            <span>{data?.team2[`name_${lng}`]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewBanner;
