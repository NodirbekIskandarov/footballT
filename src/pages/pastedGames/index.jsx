// import GamesTournament from "../../components/gamesTourament"
// import PlayersTournament from "../../components/playersTournament"
// import ResultsTournamentTable from "../../components/resultsTournamentTable"

// function PastedGames() {
//   return (
//     <div>
//       <div className="container">
//         <div style={{
//           marginTop: "50px",
//           display: "flex",
//           gap: "15px"
//         }}>
//           <span style={{
//             fontWeight: "500",
//             fontSize: "28px"
//           }}>Filter</span>
//           <input type="text"  placeholder="kun"/>
//           <input type="text"  placeholder="oy"/>
//           <input type="text"  placeholder="yil"/>
//         </div>
//       </div>
//       <GamesTournament/>
//       <ResultsTournamentTable/>
//       <PlayersTournament/>
//     </div>
//   )
// }

// export default PastedGames

import React, { useState } from 'react';
import GamesTournament from "../../components/gamesTournament";
import PlayersTournament from "../../components/playersTournament";
import ResultsTournamentTable from "../../components/resultsTournamentTable";
import styles from './style.module.scss'; // Assuming you create a CSS module for styles

function PastedGames() {
  const [filters, setFilters] = useState({ day: '', month: '', year: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="container">
        <div className={styles.filterContainer}>
          <span className={styles.filterLabel}>Filter</span>
          <input 
            type="text" 
            name="day" 
            value={filters.day} 
            onChange={handleChange} 
            placeholder="Enter day" 
            aria-label="Day"
          />
          <input 
            type="text" 
            name="month" 
            value={filters.month} 
            onChange={handleChange} 
            placeholder="Enter month" 
            aria-label="Month"
          />
          <input 
            type="text" 
            name="year" 
            value={filters.year} 
            onChange={handleChange} 
            placeholder="Enter year" 
            aria-label="Year"
          />
        </div>
      </div>
      <GamesTournament />
      <ResultsTournamentTable />
      <PlayersTournament />
    </div>
  );
}

export default PastedGames;
