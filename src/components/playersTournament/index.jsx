import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import star from '../../assets/images/yulduz.png';
import { Link, useParams } from 'react-router-dom';
import { getRequest } from '../../utils/request';
import { playerbyleague } from '../../utils/API_urls';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const PlayerCard = ({ img, name, position, index, id }) => (
  <div className={styles.box} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
    <div className={styles.star}>
      <img src={star} alt="Star icon" />
    </div>
    <div className={styles.player_part}>
      <div className={styles.player}>
        <img src={img} alt={`${name} profile`} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.position}>{position}</span>
    </div>
    <div className={styles.button_part}>
      <Link to={`/about-player/${id}`}><button className={styles.link}>View</button></Link>
    </div>
  </div>
);

PlayerCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired, // Add index as a prop for delay
  id: PropTypes.number.isRequired
};

function PlayersTournament() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const {i18n} = useTranslation()
  const lng = i18n.language

  useEffect(() => {
    getRequest(`${playerbyleague}${id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.players}>
      <div className='container'>
        <span className={styles.title}>Eng yaxshi futbolistlar</span>
        <div className={styles.boxes}>
          {data?.map((player, index) => (
            <PlayerCard key={index} img={player.image} name={player[`name_${lng}`]} position={player[`name_${lng}`]} index={index} id={player?.uuid}/>
          ))}
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <button className={styles.link2}>Ko’proq ko’rish</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlayersTournament;
