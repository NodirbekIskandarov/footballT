import React, { useEffect } from 'react';
import styles from './style.module.scss';
import stadion from '../../assets/images/stadionicon.png';
import krasovka from '../../assets/images/krasovka.png';
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import

function PlayersTable() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.players_table} data-aos="fade-up"> {/* Yangi animatsiya */}
      <div className='container'>
        <table data-aos="fade-up"> {/* Yangi animatsiya */}
          <thead>
            <tr data-aos="fade-up"> {/* Yangi animatsiya */}
              <th>Player</th>
              <th>Date of Birth</th>
              <th>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }} data-aos="fade-up"> {/* Yangi animatsiya */}
                  <img src={stadion} alt="stadion" />
                  <span>Musobaqasi</span>
                </div>
              </th>
              <th>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }} data-aos="fade-up"> {/* Yangi animatsiya */}
                  <img src={krasovka} alt="krasovka" />
                  <span>Goli</span>
                </div>
              </th>
              <th>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }} data-aos="fade-up"> {/* Yangi animatsiya */}
                  <div className={styles.yellow}></div>
                  <span>Sariq karta</span>
                </div>
              </th>
              <th>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }} data-aos="fade-up"> {/* Yangi animatsiya */}
                  <div className={styles.red}></div>
                  <span>Qizil karta</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr data-aos="fade-up"> {/* Yangi animatsiya */}
              <td>1</td>
              <td>
                <span>Brlarus Nt</span>
              </td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayersTable;
