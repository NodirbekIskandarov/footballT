import styles from "./style.module.scss";
import stadion from "../../assets/images/stadionicon.png";
import krasovka from "../../assets/images/krasovka.png";
import { useEffect, useState } from "react";
import "aos/dist/aos.css"; // AOS CSS import
import AOS from "aos"; // AOS import
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { playerseasons, playerteams } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";

function PlayerGamesTable() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const {i18n} = useTranslation()
  const lng = i18n.language
  useEffect(() => {
    getRequest(playerteams + id)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    getRequest(playerseasons + id)
      .then((response) => {
        setData2(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi
      once: true, // Faqat bir marta animatsiya
    });
  }, []);

  return (
    <div className={styles.player_games}>
      <div className="container">
        <span className={styles.title}>Futbolchining oynagan jamoalari</span>
        <div className={styles.table} data-aos="fade-up">
          {" "}
          {/* Animatsiya qo'shish */}
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Jamoa nomi</th>
                <th>Transfer sanasi</th>
                <th>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={stadion} alt="stadion" />
                    <span>Oyinlari</span>
                  </div>
                </th>
                <th>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={krasovka} alt="krasovka" />
                    <span>Goli</span>
                  </div>
                </th>
                <th>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={krasovka} alt="krasovka" />
                    <span>Assist</span>
                  </div>
                </th>
                <th>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div className={styles.yellow}></div>
                    <span>Sariq karta</span>
                  </div>
                </th>
                <th>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div className={styles.red}></div>
                    <span>Qizil karta</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <span>{item?.current_team?.name}</span>
                    </td>
                    <td>{item?.start_date}</td>
                    <td>{item?.current_team?.matches}</td>
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
        <span className={styles.title}>Futbolchining karyerasi</span>
        <div className={styles.table} data-aos="fade-up">
          {" "}
          {/* Animatsiya qo'shish */}
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Mavsum</th>
                <th>Liga</th>
                <th>Boshlanish sanasi</th>
                <th>Tugash sanasi</th>
              </tr>
            </thead>
            <tbody>
              {data2?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item[`name_${lng}`]}</td>
                    <td>{item?.league_name[`name_${lng}`]}</td>
                    <td>
                      <span>{item?.start_date}</span>
                    </td>
                    <td>{item?.end_date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlayerGamesTable;
