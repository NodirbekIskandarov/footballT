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
import player from '../../assets/images/defaultplayerimage.jpg'

function PlayersTable() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const navigate = useNavigate();

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

  function navigateFunc(id) {
    navigate(`/about-player/${id}`);
  }

  return (
    <div className={styles.players_table} data-aos="fade-up">
      <div className="container">
        <div className={styles.tableWrapper}>
          <table data-aos="fade-up">
            <thead>
              <tr>
                <th></th>
                <th>{t("Player")}</th>
                <th>{t("Date of Birth")}</th>
                <th>{t("O'yinchi raqami")}</th>
                <th>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src={ball} alt="ball" />
                    <span>{t("Goli")}</span>
                  </div>
                </th>
                <th>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src={krasovka} alt="krasovka" />
                    <span>{t("Assist")}</span>
                  </div>
                </th>
                <th>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div className={styles.yellow}></div>
                    <span>{t("Sariq karta")}</span>
                  </div>
                </th>
                <th>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div className={styles.red}></div>
                    <span>{t("Qizil karta")}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.players?.data?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td onClick={() => navigateFunc(item?.uuid)} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src={item?.image ?? player} alt="rasn" style={{width: "30px", height: "30px", borderRadius: "50%"}}/>
                    <span>{item[`name_${lng}`]}</span>
                  </td>
                  <td>{item?.birthday}</td>
                  <td>{item?.number}</td>
                  <td>{item?.events?.goals}</td>
                  <td>{item?.events?.assists}</td>
                  <td>{item?.events?.yellows}</td>
                  <td>{item?.events?.reds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlayersTable;
