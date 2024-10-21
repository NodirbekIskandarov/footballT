import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Media() {
    return (
        <div>
            <div style={{
                width: "100%",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "#295FA7",
                margin: "20px 0"
            }}>
                <Link to="/media" style={{
                    width: "45%",
                    height: "44px",
                    textDecoration: "none"
                }}>
                    <button style={{
                        width: "100%",
                        height: "44px",
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        fontSize: "24px",
                        fontWeight: "500",
                        color: "#295FA7",
                        border: "none",
                        cursor: "pointer"
                    }}>Photo</button>
                </Link>
                <Link to="video" style={{
                    width: "45%",
                    height: "44px",
                    textDecoration: "none"
                }}>
                    <button style={{
                        width: "100%",
                        height: "44px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        color: "white",
                        fontSize: "24px",
                        fontWeight: "500",
                        border: "none",
                        cursor: "pointer",
                        background: "transparent"
                    }}>Video</button>
                </Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default Media