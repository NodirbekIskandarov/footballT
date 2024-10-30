import Slider from "react-slick";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { partners } from "../../utils/API_urls";
import { getRequest } from "../../utils/request";
import 'aos/dist/aos.css'; // AOS CSS import
import AOS from 'aos'; // AOS import

function Partners() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRequest(partners)
      .then((response) => {
        setData(response?.data || []);
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
    infinite: false,
    speed: 500,
    slidesToShow: data.length >= 3 ? 3 : data.length || 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.partners}>
      <div className="container">
        <div className={styles.carousel_container}>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div className={styles.slide} key={index} data-aos="zoom-in"> {/* Yangi animatsiya */}
                <img src={item?.image} alt={item?.name} className={styles.partnerImage} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Partners;
