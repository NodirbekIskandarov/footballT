import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { teamsbyleague } from "../../utils/API_urls";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function ResultsTournamentTable() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const {t, i18n} = useTranslation()
  const lng = i18n.language
  const navigate = useNavigate()
  useEffect(() => {
    // Fetching data from API
    getRequest(`${teamsbyleague}${id}`)
      .then((response) => {
        setData(response?.data);
        console.log(response?.data, "kdjfbkd");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    // Initializing AOS animations
    AOS.init({ duration: 1000 }); // 1000 ms duration for animation
  }, []);
function navigateFunc (id) {
  navigate(`/players/${id}`)
}
  return (
    <div className={styles.results_table}>
    <div className="container">
      <span className={styles.title}>{t("Futbol jamoa natijalari")}</span>
      <div className={styles["table-wrapper"]}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{t("O'rni")}</th>
              <th style={{ textAlign: "start" }}>{t("Jamoa nomi")}</th>
              <th>{t("O'yinlar soni")}</th>
              <th>{t("G'alaba")}</th>
              <th>{t("Durang")}</th>
              <th>{t("Mag'lubiyat")}</th>
              <th>{t("Gollar nisbati")}</th>
              <th>{t("Achko")}</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <td>{index + 1}</td>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigateFunc(item?.uuid)}
                >
                  <img src={item?.icon} alt="team logo" />
                  <span>{item[`name_${lng}`]}</span>
                </td>
                <td>{item?.data?.matches}</td>
                <td>{item?.data?.wins}</td>
                <td>{item?.data?.draws}</td>
                <td>{item?.data?.loses}</td>
                <td>
                  {item?.data?.my_goals}-{item?.data?.your_goals}
                </td>
                <td>{item?.data?.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  );
}

export default ResultsTournamentTable;
