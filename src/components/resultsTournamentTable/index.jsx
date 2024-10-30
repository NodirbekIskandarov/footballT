

import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { teamsbyleague } from "../../utils/API_urls";

function ResultsTournamentTable() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getRequest(`${teamsbyleague}${id}`)
      .then((response) => {
        console.log(response, "resposne");
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className={styles.results_table}>
      <div className="container">
        <span className={styles.title}>Futbol jamoa natijalari</span>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>O’rni</th>
              <th>Futbol jamoa</th>
              <th>O&apos;yinlar soni</th>
              <th>Achko</th>
              <th>Goli</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={item?.icon} alt="Brlarus NT logo" />
                    <span>{item?.name}</span>
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
