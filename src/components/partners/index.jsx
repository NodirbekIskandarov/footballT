import Slider from "react-slick";
import styles from "./style.module.scss";
function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.partners}>
      <div className="container">
        <div className={styles.carousel_container}>
          <Slider {...settings}>
            <div className={styles.slide}>
              <div className={styles.slidee}>1</div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slidee}>2</div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slidee}>3</div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slidee}>4</div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slidee}>5</div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Partners;
