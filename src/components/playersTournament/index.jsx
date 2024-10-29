// import React from 'react'
// import styles from './style.module.scss'
// import star from '../../assets/images/yulduz.png'
// import player from '../../assets/images/player.png'
// import { Link } from 'react-router-dom'
// function PlayersTournament() {
//     return (
//         <div className={styles.players}>
//             <div className='container'>
//                 <span className={styles.title}>Eng yaxshi futbolistlar</span>
//                 <div className={styles.boxes}>
//                     <div className={styles.box}>
//                         <div className={styles.star}>
//                             <img src={star} alt="yulduzcha" />
//                         </div>
//                         <div className={styles.player_part}>
//                             <div className={styles.player}>
//                                 <img src={player} alt="o'yinchi" />
//                             </div>
//                             <span className={styles.name}>Asadov Asadbek</span>
//                             <span className={styles.position}>O’yinchi</span>
//                         </div>
//                         <div className={styles.button_part}>
//                             <Link to="/"><button className={styles.link}>View</button></Link>
//                         </div>
//                     </div>
//                     <div className={styles.box}>
//                         <div className={styles.star}>
//                             <img src={star} alt="yulduzcha" />
//                         </div>
//                         <div className={styles.player_part}>
//                             <div className={styles.player}>
//                                 <img src={player} alt="o'yinchi" />
//                             </div>
//                             <span className={styles.name}>Asadov Asadbek</span>
//                             <span className={styles.position}>O’yinchi</span>
//                         </div>
//                         <div className={styles.button_part}>
//                             <Link to="/"><button className={styles.link}>View</button></Link>
//                         </div>
//                     </div>
//                     <div className={styles.box}>
//                         <div className={styles.star}>
//                             <img src={star} alt="yulduzcha" />
//                         </div>
//                         <div className={styles.player_part}>
//                             <div className={styles.player}>
//                                 <img src={player} alt="o'yinchi" />
//                             </div>
//                             <span className={styles.name}>Asadov Asadbek</span>
//                             <span className={styles.position}>O’yinchi</span>
//                         </div>
//                         <div className={styles.button_part}>
//                             <Link to="/"><button className={styles.link}>View</button></Link>
//                         </div>
//                     </div>
//                     <div className={styles.box}>
//                         <div className={styles.star}>
//                             <img src={star} alt="yulduzcha" />
//                         </div>
//                         <div className={styles.player_part}>
//                             <div className={styles.player}>
//                                 <img src={player} alt="o'yinchi" />
//                             </div>
//                             <span className={styles.name}>Asadov Asadbek</span>
//                             <span className={styles.position}>O’yinchi</span>
//                         </div>
//                         <div className={styles.button_part}>
//                             <Link to="/"><button className={styles.link}>View</button></Link>
//                         </div>
//                     </div>

//                 </div>
//                 <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
//                     <Link to="/" style={{ textDecoration: "none" }}><button className={styles.link2}>Ko’proq ko’rish</button></Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PlayersTournament

import React from 'react';
import styles from './style.module.scss';
import star from '../../assets/images/yulduz.png';
import player from '../../assets/images/player.png';
import { Link } from 'react-router-dom';

const PlayerCard = ({ name, position }) => (
  <div className={styles.box}>
    <div className={styles.star}>
      <img src={star} alt="Star icon" />
    </div>
    <div className={styles.player_part}>
      <div className={styles.player}>
        <img src={player} alt={`${name} profile`} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.position}>{position}</span>
    </div>
    <div className={styles.button_part}>
      <Link to="/"><button className={styles.link}>View</button></Link>
    </div>
  </div>
);

function PlayersTournament() {
  const players = [
    { name: 'Asadov Asadbek', position: 'O’yinchi' },
    { name: 'Player 2', position: 'O’yinchi' },
    { name: 'Player 3', position: 'O’yinchi' },
    { name: 'Player 4', position: 'O’yinchi' },
  ];

  return (
    <div className={styles.players}>
      <div className='container'>
        <span className={styles.title}>Eng yaxshi futbolistlar</span>
        <div className={styles.boxes}>
          {players.map((player, index) => (
            <PlayerCard key={index} name={player.name} position={player.position} />
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
