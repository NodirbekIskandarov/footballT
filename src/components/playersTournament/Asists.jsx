import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import star from '../../assets/images/yulduz.png';
import { Link, useParams } from 'react-router-dom';
import { getRequest } from '../../utils/request';
import { assists } from '../../utils/API_urls';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import defaultimage from '../../assets/images/defaultplayerimage.jpg'
const PlayerCard = ({ img, name, position, index, id, viewText, goals }) => (
  <div className={styles.box} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
    <div className={styles.star}>
      <img src={star} alt="Star icon" />
    </div>
    <div className={styles.player_part}>
      <div className={styles.player}>
        <img src={img ?? defaultimage} alt={`${name} profile`} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.position}>{position}</span>
      <span className={styles.position}>Assist - {goals}</span>
    </div>
    <div className={styles.button_part}>
      <Link to={`/about-player/${id}`}><button className={styles.link}>{viewText}</button></Link>
    </div>
  </div>
);

PlayerCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  goals: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired, // Changed to string assuming uuid is a string
  viewText: PropTypes.string.isRequired, // New prop for translated text
};

function Asists() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    getRequest(`${assists}${id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleClick = () => {
    getRequest(`${assists}${id}?size=40`)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.players}>
      <div className="container">
        <span className={styles.title}>{t("Assistlar")}</span>
        <div className={styles.boxes}>
          {data?.map((player, index) => (
            <PlayerCard 
              key={index} 
              img={player.image} 
              name={player[`name_${lng}`]} 
              position={player?.position[`position_${lng}`]} // Assuming `position` has a language key
              goals={player?.assists_count}
              index={index} 
              id={player.uuid} 
              viewText={t("View")}
            />
          ))}
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <button className={styles.link2} onClick={handleClick}>{t("Ko’proq ko’rish")}</button>
        </div>
      </div>
    </div>
  );
}

export default Asists;
