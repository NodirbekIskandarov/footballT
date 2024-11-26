// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import img1 from "../../assets/images/banner.png"; // Replace with your actual image path
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { home_banner } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@mui/material";

export default function Banner() {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    getRequest(home_banner)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data &&
          data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                {item?.match?.is_active ? (
                  <Tooltip
                    followCursor
                    title={t("Ko'proq ma'lumot uchun rasm ustiga bosing")}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%", // CSS fayli orqali boshqariladi
                        backgroundImage: `url(${item?.photo})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        to={item?.uuid}
                        style={{ width: "100%", height: "100%" }}
                      ></Link>
                      {/* <div
                      style={{
                        width: "90%", // Mobil va tablet uchun kenglikni qisqartirish
                        maxWidth: "800px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        padding: "20px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        backdropFilter: "blur(5px)",
                        borderRadius: "10px"
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: "32px", // Desktop: 48px, Tablet: 32px, Mobil: 24px
                          color: "#FFFFFF",
                          textAlign: "center", // Mobil va tabletda matnni markazlashtirish
                        }}
                      >
                        {item[`title_${lng}`]}
                      </span>
                      <Link to={item?.uuid}>
                        <button
                          style={{
                            padding: "12px 16px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "8px",
                            border: "none",
                            fontSize: "18px",
                            color: "#1E1E1E",
                            cursor: "pointer",
                            alignSelf: "center", // Mobil va tabletda markaziy joylashuv
                          }}
                        >
                          {t("Ko’proq ma’lumot")}
                        </button>
                      </Link>
                    </div> */}
                    </div>
                  </Tooltip>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%", // CSS fayli orqali boshqariladi
                      backgroundImage: `url(${item?.photo})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* <div
                      style={{
                        width: "90%", // Mobil va tablet uchun kenglikni qisqartirish
                        maxWidth: "800px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        padding: "20px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        backdropFilter: "blur(5px)",
                        borderRadius: "10px"
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: "32px", // Desktop: 48px, Tablet: 32px, Mobil: 24px
                          color: "#FFFFFF",
                          textAlign: "center", // Mobil va tabletda matnni markazlashtirish
                        }}
                      >
                        {item[`title_${lng}`]}
                      </span>
                      <Link to={item?.uuid}>
                        <button
                          style={{
                            padding: "12px 16px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "8px",
                            border: "none",
                            fontSize: "18px",
                            color: "#1E1E1E",
                            cursor: "pointer",
                            alignSelf: "center", // Mobil va tabletda markaziy joylashuv
                          }}
                        >
                          {t("Ko’proq ma’lumot")}
                        </button>
                      </Link>
                    </div> */}
                  </div>
                )}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
