import Slider from "react-slick";
import "./GameCar.css"; // Import the CSS file
import logoClub from "../../assets/images/club-logo.png";
export default function GameCar() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="game-car">
        <div className="container">
            <div className="carousel-container">
                <Slider {...settings}>
                <div className="slide">
                    <div className="slidee">
                    <div className="slide-child">
                        <span className="game_date">20 JUL.Sun</span>
                        <div className="clubs_part">
                        <div>
                            <img src={logoClub} alt="komonda logosi" />
                        </div>
                        <div>
                            <span>N york</span>
                        </div>
                        <div className="vs">VS</div>
                        <div>
                            <span>N york</span>
                        </div>
                        <div>
                            <img src={logoClub} alt="komonda logosi" />
                        </div>
                        </div>
                        <span className="game_date">3:1</span>
                        <div className="liga-name">
                        <span>Liga nomi</span>
                        {/* <img className="rasm" src={logoClub} alt="liga logosi" /> */}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="slidee">
                    <div className="slide-child">
                        <span className="game_date">20 JUL.Sun</span>
                        <div className="clubs_part">
                        <div>
                            <img src={logoClub} alt="komonda logosi" />
                        </div>
                        <div>
                            <span>N york</span>
                        </div>
                        <div className="vs">VS</div>
                        <div>
                            <span>N york</span>
                        </div>
                        <div>
                            <img src={logoClub} alt="komonda logosi" />
                        </div>
                        </div>
                        <span className="game_date">3:1</span>
                        <div className="liga-name">
                        <span>Liga nomi</span>
                        {/* <img className="rasm" src={logoClub} alt="liga logosi" /> */}
                        </div>
                    </div>
                    </div>
                </div>
                </Slider>
            </div>
        </div>
    </div>
  );
}
