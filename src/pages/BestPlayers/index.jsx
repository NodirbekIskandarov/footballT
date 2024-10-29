import styles from "./style.module.scss";
import player from "../../assets/images/player.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { getRequest } from "../../utils/request";
import { best_players } from "../../utils/API_urls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function BestPlayers() {
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  const [year, setYear] = useState("2024")
  useEffect(() => {
    getRequest(`${best_players}?year=${year}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [year]);
  function navigateFunc(id) {
    navigate(`/about-player/${id}`)
  }

  return (
    <div className={styles.players}>
      <div className="container">
        <div className={styles.title_part}>
          <span>Eng yaxshi futbolistlar</span>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>
        </div>

        <div className={styles.boxes}>
          {data?.map((item, index) => {
            return (
                <div className={styles.box} key={index}>
                <img src={player} alt="player" />
                <span className={styles.name}>{item?.name}</span>
                <span className={styles.position}>{item?.position}</span>
                <button onClick={() => navigateFunc(item?.uuid)}>
                    View <FaArrowRightLong />
                </button>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default BestPlayers;
