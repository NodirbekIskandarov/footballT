import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import krasovka from "../../assets/images/krasovka.png";
import ball from "../../assets/images/top.png";
import "aos/dist/aos.css"; // AOS CSS import
import AOS from "aos"; // AOS import
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { playerbyteam } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";

function PlayersTable() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const {t,i18n} = useTranslation()
  const lng = i18n.language
  const navigate = useNavigate()
  useEffect(() => {
    getRequest(playerbyteam + id)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  function navigateFunc (id) {
    navigate(`/about-player/${id}`)
  }

  return (
    <div className={styles.players_table} data-aos="fade-up">
      {" "}
      {/* Yangi animatsiya */}
      <div className="container">
        <table data-aos="fade-up">
          {" "}
          {/* Yangi animatsiya */}
          <thead>
            <tr data-aos="fade-up">
              {" "}
              {/* Yangi animatsiya */}
              <th></th>
              <th>{t("Player")}</th>
              <th>{t("Date of Birth")}</th>
              <th>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  data-aos="fade-up"
                >
                  {" "}
                  {/* Yangi animatsiya */}
                  <img src={ball} alt="ball" />
                  <span>{t("Goli")}</span>
                </div>
              </th>
              <th>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  data-aos="fade-up"
                >
                  {" "}
                  {/* Yangi animatsiya */}
                  <img src={krasovka} alt="krasovka" />
                  <span>{t("Assist")}</span>
                </div>
              </th>
              <th>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  data-aos="fade-up"
                >
                  {" "}
                  {/* Yangi animatsiya */}
                  <div className={styles.yellow}></div>
                  <span>{t("Sariq karta")}</span>
                </div>
              </th>
              <th>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  data-aos="fade-up"
                >
                  {" "}
                  {/* Yangi animatsiya */}
                  <div className={styles.red}></div>
                  <span>{t("Qizil karta")}</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.players?.data?.map((item, index) => {
              return (
                <tr data-aos="fade-up" key={index}>
                  {" "}
                  {/* Yangi animatsiya */}
                  <td>{index + 1}</td>
                  <td onClick={() => navigateFunc(item?.uuid)} style={{cursor: "pointer"}}>
                    <span>{item[`name_${lng}`]}</span>
                  </td>
                  <td>{item?.birthday}</td>
                  <td>{item?.events?.goals}</td>
                  <td>{item?.events?.assists}</td>
                  <td>{item?.events?.yellows}</td>
                  <td>{item?.events?.reds}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayersTable;
