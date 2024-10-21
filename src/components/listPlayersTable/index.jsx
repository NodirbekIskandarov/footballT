import React from 'react'
import styles from './style.module.scss'
import stadion from '../../assets/images/stadionicon.png'
import krasovka from '../../assets/images/krasovka.png'
function PlayersTable() {
    return (
        <div className={styles.players_table}>
            <div className='container'>
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
        </div>
    )
}

export default PlayersTable