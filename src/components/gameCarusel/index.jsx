import Slider from "react-slick";
import "./GameCar.css"; // Import the CSS file
import { useEffect, useState } from "react";
import { getRequest } from "../../utils/request";
import { home_last_match } from "../../utils/API_urls";
export default function GameCar() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getRequest(home_last_match)
      .then((response) => {
        console.log(response);
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  function formatDateToYMD(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Oy 0 dan boshlanadi
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${year}.${month}.${day}`;
}

  return (
    <div className="game-car">
      <div className="container">
        <div className="carousel-container">
          <Slider {...settings}>
            {
              data?.map((item, index) => {
                return (
                  <div className="slide" key={index}>
                    <div className="slidee">
                      <div className="slide-child">
                        <span className="game_date">{formatDateToYMD(item?.date)}</span>
                        <div className="clubs_part">
                          <div>
                            <img src={item?.team1?.icon_url} alt="komonda logosi" />
                          </div>
                          <div>
                            <span>{item?.team1?.name}</span>
                          </div>
                          <div className="vs">VS</div>
                          <div>
                            <span>{item?.team2?.name}</span>
                          </div>
                          <div>
                            <img src={item?.team2?.icon_url} alt="komonda logosi" />
                          </div>
                        </div>
                        <span className="game_date">{item?.score?.team1_score} : {item?.score?.team2_score}</span>
                        <div className="liga-name">
                          <span>{item?.league}</span>
                          {/* <img className="rasm" src={logoClub} alt="liga logosi" /> */}
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
