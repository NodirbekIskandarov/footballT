import styles from './style.module.scss';
import stadion from '../../assets/images/stadionicon.png';
import krasovka from '../../assets/images/krasovka.png';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import

function PlayerGamesTable() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi
            once: true, // Faqat bir marta animatsiya
        });
    }, []);

    return (
        <div className={styles.player_games}>
            <div className='container'>
                <span className={styles.title}>Futbolchining musobaqalari</span>
                <div className={styles.table} data-aos="fade-up"> {/* Animatsiya qo'shish */}
                    <table>
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Date of Birth</th>
                                <th>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px"
                                    }}>
                                        <img src={stadion} alt="stadion" />
                                        <span>Musobaqasi</span>
                                    </div>
                                </th>
                                <th>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px"
                                    }}>
                                        <img src={krasovka} alt="krasovka" />
                                        <span>Goli</span>
                                    </div>
                                </th>
                                <th>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px"
                                    }}>
                                        <div className={styles.yellow}></div>
                                        <span>Sariq karta</span>
                                    </div>
                                </th>
                                <th>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px"
                                    }}>
                                        <div className={styles.red}></div>
                                        <span>Qizil karta</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
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
                <span className={styles.title}>Futbolchining karyerasi</span>
                <div className={styles.table} data-aos="fade-up"> {/* Animatsiya qo'shish */}
                    <table>
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Date of Birth</th>
                                <th>Date of Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <span>Brlarus Nt</span>
                                </td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>          
            </div>
        </div>
    );
}

export default PlayerGamesTable;
