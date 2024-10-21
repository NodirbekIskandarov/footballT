import React from 'react'
import styles from './style.module.scss'
import logo from '../../assets/images/clublogoo.png'
function ResultsTournamentTable() {
  return (
    <div className={styles.results_table}>
      <div className='container'>
        <span className={styles.title}>Futbol jamoa natijalari</span>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>O’rni</th>
              <th>Futbol jamoa</th>
              <th>Oltin kubugi</th>
              <th>Musobaqasi</th>
              <th>Goli</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <img src={logo} alt="" />
                <span>Brlarus Nt</span>
              </td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ResultsTournamentTable