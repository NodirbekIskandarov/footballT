import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import star from '../../assets/images/yulduz.png';
import { Link, useParams } from 'react-router-dom';
import { getRequest } from '../../utils/request';
import { playerbyleague } from '../../utils/API_urls';

const PlayerCard = () => (
  <div className={styles.box}>
    <div className={styles.star}>
      <img src={star} alt="Star icon" />
    </div>
    <div className={styles.player_part}>
      <div className={styles.player}>
        {/* <img src={img} alt={`${name} profile`} /> */}
      </div>
      <span className={styles.name}>{name}</span>
      {/* <span className={styles.position}>{position}</span> */}
    </div>
    <div className={styles.button_part}>
      <Link to="/"><button className={styles.link}>View</button></Link>
    </div>
  </div>
);

function PlayersTournament() {


  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getRequest(`${playerbyleague}${id}`)
      .then((response) => {
        console.log(response, "resposne");
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className={styles.players}>
      <div className='container'>
        <span className={styles.title}>Eng yaxshi futbolistlar</span>
        <div className={styles.boxes}>
          {data?.map((player, index) => (
            <PlayerCard key={index} img={player.image} name={player.name} position={player.position} />
          ))}
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className={styles.link2}>Ko’proq ko’rish</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlayersTournament;
