import styles from "./style.module.scss";
import { IoTimeOutline } from "react-icons/io5";
// import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { expected_games } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";
function HomePlanedGames() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getRequest(expected_games)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <div className={styles.planed_games}>
        {data?.map((item, index) => {
          return (
            <div className={styles.game} key={index}>
              <div className={styles.clubs}>
                <div>
                  <img src={item?.team1?.icon_url} alt="club-logotip" />
                  <span>{item?.team1?.name}</span>
                </div>
                <span>VS</span>
                <div>
                  <img src={item?.team2?.icon_url} alt="club-logotip" />
                  <span>{item?.team1?.name}</span>
                </div>
              </div>
              <div className={styles.date}>
                <div className={styles.time}>
                  <IoTimeOutline />
                  <span>{formatDateToYMD(item?.date)}</span>
                </div>
                {/* <div className={styles.location}>
                  <CiLocationOn color="red" />
                  <span>London</span>
                </div> */}
              </div>
              <div className={styles.details}>
                <div className={styles.fav}>
                  <MdFavoriteBorder />
                </div>
                <div className={styles.view}>
                  <span>View Details</span>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePlanedGames;
