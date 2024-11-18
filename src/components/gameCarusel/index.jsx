import Slider from "react-slick";
import "./GameCar.css"; // Import the CSS file
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { home_last_match } from "../../utils/API_urls";
import { formatDateToYMD } from "../../utils/dateFormat";
import { useNavigate } from "react-router-dom";
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import
import { useTranslation } from "react-i18next";
import clublogo from '../../assets/images/club-logo2.png'

export default function GameCar() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const {i18n} = useTranslation()
const lng = i18n.language
  useEffect(() => {
    getRequest(home_last_match)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Katta ekranlarda ko'rinishi
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobil qurilmalar uchun
        settings: {
          slidesToShow: 1, // Mobilda 1 ta slayd ko'rsatish
        },
      },
    ],
  };

  function navigateFunc(id) {
    navigate(`/preview/previ/${id}`);
  }

  return (
    <div className="game-car">
      <div className="container">
        <div className="carousel-container">
          <Slider {...settings}>
            {data?.map((item, index) => {
              return (
                <div className="slide" key={index} data-aos="fade-left"> {/* Yangi animatsiya */}
                  <div className="slidee" onClick={() => navigateFunc(item?.uuid)}>
                    <div className="slide-child">
                      <span className="game_date">{formatDateToYMD(item?.date)}</span>
                      <div className="clubs_part">
                        <div>
                          <img src={item?.team1?.icon_url ?? clublogo} alt="komonda logosi" />
                        </div>
                        <div className="span">
                          <span>{item?.team1[`name_${lng}`]}</span>
                        </div>
                        <div className="vs">VS</div>
                        <div className="span">
                          <span>{item?.team2[`name_${lng}`]}</span>
                        </div>
                        <div>
                          <img src={item?.team2?.icon_url ?? clublogo} alt="komonda logosi" />
                        </div>
                      </div>
                      <span className="game_date">{item?.score?.team1_score} : {item?.score?.team2_score}</span>
                      <div className="liga-name">
                        <span>{item?.league[`name_${lng}`]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
