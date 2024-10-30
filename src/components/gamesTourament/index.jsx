

import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/request";
import { matchbyleague } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";

function GamesTournament() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getRequest(`${matchbyleague}${id}`)
      .then((response) => {
        console.log(response, "resposne");
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className={styles.games}>
      <div className="container">
        {data?.passed?.map((item, index) => {
          return (
            <div className={styles.table} key={index}>
              <span className={styles.sana}>{formatDateToYMD(item?.date)}</span>
              <div className={styles.table_part}>
                <div className={styles.left}>
                  <div className={styles.image_part}>
                    <img src={item?.team1?.icon_url} alt={`logo`} />
                  </div>
                  <div className={styles.name_part}>{item?.team1?.name}</div>
                </div>
                <div className={styles.shot}>{item?.score?.team1_score}:{item?.score?.team2_score}</div>
                <div className={styles.right}>
                  <div className={styles.name_part}>{item?.team2?.name}</div>
                  <div className={styles.image_part}>
                    <img src={item?.team2?.icon_url} alt={` logo`} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GamesTournament;
