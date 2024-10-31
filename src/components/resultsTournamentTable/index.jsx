import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    // Fetching data from API
    getRequest(`${teamsbyleague}${id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    // Initializing AOS animations
    AOS.init({ duration: 1000 }); // 1000 ms duration for animation
  }, []);

  return (
    <div className={styles.results_table}>
      <div className="container">
        <span className={styles.title}>{t("Futbol jamoa natijalari")}</span>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{t("O'rni")}</th>
              <th>{t("Jamoa nomi")}</th>
              <th>{t("O'yinlar soni")}</th>
              <th>{t("Achko")}</th>
              <th>{t("Goli")}</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                  <td>{index + 1}</td>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={item?.icon} alt="team logo" />
                    <span>{item[`name_${lng}`]}</span>
                  </td>
                  <td>{item?.matches}</td>
                  <td>{item?.points}</td>
                  <td>{item?.goals}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultsTournamentTable;
