// import styles from './style.module.scss'
// import logo from '../../assets/images/clublogoo.png'
// function GamesTournament() {
//     return (
//         <div className={styles.games}>
//             <div className='container'>
//                 <div className={styles.table}>
//                     <span className={styles.sana}>14 August 2024 </span>
//                     <div className={styles.table_part}>
//                         <div className={styles.left}>
//                             <div className={styles.image_part}>
//                                 <img src={logo} alt="club logosi" />
//                             </div>
//                             <div className={styles.name_part}>BELARUS NT</div>
//                         </div>
//                         <div className={styles.shot}>3:1</div>
//                         <div className={styles.right}>
//                             <div className={styles.name_part}>BELARUS NT</div>
//                             <div className={styles.image_part}>
//                                 <img src={logo} alt="club logosi" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default GamesTournament

import styles from './style.module.scss';
import logo from '../../assets/images/clublogoo.png';

function GamesTournament({ date = "14 August 2024", team1 = "BELARUS NT", team2 = "BELARUS NT", score = "3:1" }) {
  return (
    <div className={styles.games}>
      <div className="container">
        <div className={styles.table}>
          <span className={styles.sana}>{date}</span>
          <div className={styles.table_part}>
            <div className={styles.left}>
              <div className={styles.image_part}>
                <img src={logo} alt={`${team1} logo`} />
              </div>
              <div className={styles.name_part}>{team1}</div>
            </div>
            <div className={styles.shot}>{score}</div>
            <div className={styles.right}>
              <div className={styles.name_part}>{team2}</div>
              <div className={styles.image_part}>
                <img src={logo} alt={`${team2} logo`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesTournament;
