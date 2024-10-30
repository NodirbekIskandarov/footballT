import { useNavigate, useParams } from "react-router-dom";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { banner_detail } from "../../utils/API_urls";
import { formatDateToHMS, formatDateToYMD } from "../../utils/dateFormat";
import { useTranslation } from "react-i18next";
function BannerDetail() {
  const {t} = useTranslation()
  const [data, setData] = useState(null);
  const pk = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    getRequest(`${banner_detail}${pk.id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pk.id]);
  function navigateFunc(id) {
    navigate(`/players/${id}`)
  }
  return (
    <div className={styles.banner_detail}>
      <div className="container">
        <div className={styles.banner}>
          <img src={data?.photo} alt="detail banner" />
        </div>
        <div className={styles.desc_part}>
          <span className={styles.title}>{data?.title}</span>
          <br />
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <span className={styles.desc}>{data?.body}</span>
          </div>
        </div>
        <div className={styles.table}>
          <span className={styles.sana}>
            {formatDateToYMD(data?.match?.date)}{" "}
          </span>
          <br />
          <span
            style={{
              fontSize: "29px",
              fontWeight: "500",
              marginTop: "20px",
            }}
          >
            {formatDateToHMS(data?.match?.date)}
          </span>
          <div className={styles.table_part}>
            <div className={styles.left} onClick={() => navigateFunc(data?.match?.team1?.uuid)}>
              <div className={styles.image_part}>
                <img src={data?.match?.team1?.icon_url} alt="club logosi" />
              </div>
              <div className={styles.name_part}>{data?.match?.team1?.name}</div>
            </div>
            <div className={styles.shot}>
              {data?.match?.score?.team1_score}:
              {data?.match?.score?.team2_score}
            </div>
            <div className={styles.right} onClick={() => navigateFunc(data?.match?.team2?.uuid)}>
              <div className={styles.name_part}>{data?.match?.team2?.name}</div>
              <div className={styles.image_part}>
                <img src={data?.match?.team2?.icon_url} alt="club logosi" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.epizod}>
          <span>{t("O’yindagi epizodlar")}</span>
          <div className={styles.boxes}>
            {data?.media?.map((item, index) => {
              return (
                <div className={styles.box} key={index}>
                  <img src={item?.photo} alt="media rasm" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerDetail;
