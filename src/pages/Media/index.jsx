import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Media() {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <div>
            <div style={{
                width: "100%",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "#295FA7",
                margin: "20px 0",
                flexWrap: "nowrap"  // Prevents wrapping
            }}>
                <Link to="/media" style={{
                    width: "45%",
                    height: "44px",
                    textDecoration: "none"
                }}>
                    <button style={{
                        width: "100%",
                        height: "44px",
                        backgroundColor: `${location.pathname === "/media/video" ? "transparent" : "white"}`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        fontSize: "24px",
                        fontWeight: "500",
                        color: `${location.pathname === "/media/video" ? "white" : "#295FA7"}`,
                        border: "none",
                        cursor: "pointer"
                    }}>
                        {t("Photo")}
                    </button>
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
                        color: `${location.pathname !== "/media/video" ? "white" : "#295FA7"}`,
                        fontSize: "24px",
                        fontWeight: "500",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: `${location.pathname !== "/media/video" ? "transparent" : "white"}`
                    }}>
                        {t("Video")}
                    </button>
                </Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Media;
