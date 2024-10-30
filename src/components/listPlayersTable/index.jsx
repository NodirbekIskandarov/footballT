import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import krasovka from "../../assets/images/krasovka.png";
import "aos/dist/aos.css"; // AOS CSS import
import AOS from "aos"; // AOS import
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { playerbyteam } from "../../utils/API_urls";

function PlayersTable() {
  const [data, setData] = useState(null);
  const { id } = useParams();
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
              <th>Player</th>
              <th>Date of Birth</th>
              <th>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  data-aos="fade-up"
                >
                  {" "}
                  {/* Yangi animatsiya */}
                  <img src={krasovka} alt="krasovka" />
                  <span>Goli</span>
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
                  <span>Assist</span>
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
                  <span>Sariq karta</span>
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
                  <span>Qizil karta</span>
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
                  <td>
                    <span>{item?.name}</span>
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
