import styles from "./style.module.scss";
import banner from "../../assets/images/planedback.png";
import { useEffect, useState } from "react";
import { getRequest, postRequest } from "../../utils/request";
import { about_us, organization_list, postdata } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css"; // AOS CSS import
import AOS from "aos"; // AOS import
import defaultimage from "../../assets/images/defaultplayerimage.jpg";

function AboutUs() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState(null);
  const [organizators, setOrganizators] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Yuborish jarayoni yuklanishi
  const [modalOpen, setModalOpen] = useState(false); // Modal ochiq yoki yo'q holati
  const [modalMessage, setModalMessage] = useState(""); // Modalda ko'rsatiladigan xabar
  const lng = i18n.language;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi
      once: true, // Faqat bir marta animatsiya
    });

    getRequest(about_us)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getRequest(organization_list)
      .then((response) => {
        setOrganizators(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    if (!name || !phoneNumber || !message) {
      setModalMessage("Please fill in all fields."); // Show error for empty fields
      setModalOpen(true);
      return; // Stop the submission
    }

    setLoading(true); // Yuklanishni ko'rsatish
    const postData = {
      name: name,
      number: phoneNumber,
      text: message,
    };

    postRequest(postdata, postData)
      .then((response) => {
        setModalMessage("Your message has been sent successfully!"); // Muvaffaqiyatli xabar
        setLoading(false);
        setModalOpen(true); // Modalni ochish
        // Input qiymatlarini tozalash
        setName("");
        setPhoneNumber("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error); // Log the error
        setModalMessage("Something went wrong. Please try again."); // Xato holati
        setLoading(false);
        setModalOpen(true); // Modalni ochish
      });
  };

  const description =
    lng === "uz"
      ? data?.description_uz
      : lng === "ru"
      ? data?.description_ru
      : data?.description_en;

  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.banner} data-aos="fade-up">
          {" "}
          {/* Animatsiya qo'shish */}
          <img src={banner} alt="banner" />
        </div>
        <div className={styles.text_part} data-aos="fade-up">
          {" "}
          {/* Animatsiya qo'shish */}
          <h3>{t("Tashkilot haqida")}</h3>
          <span>{description}</span>
        </div>
        <div className={styles.organizators} data-aos="fade-up">
          <h3>{t("Tashkilotchilar")}</h3>
          <div className={styles.cards}>
            {organizators?.map((item, index) => {
              return (
                <div className={styles.card} key={index} data-aos="fade-up">
                  <img src={item?.image ?? defaultimage} alt="player" />
                  <span className={styles.name}>{item[`name_${lng}`]}</span>
                  <span className={styles.position}>{item?.position}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className="container">
          <div className={styles.boxes}>
            <div className={styles.text_part}>
              <span className={styles.one}>
                {t("Biz bilan bo’g’lanib savolaringizga javob oling")}
              </span>
              <br />
              <br />
              <span className={styles.two}>{t("Aloqa nomeri")}</span>
              <br />
              <span className={styles.three}>{data?.phone}</span>
            </div>
            <div className={styles.form_part}>
              <input
                type="text"
                placeholder={t("F.I.SH")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder={t("Telefon raqam")}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <textarea
                placeholder={t("Message")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button onClick={handleSubmit} disabled={loading}>
                {loading ? t("Yuborilmoqda...") : t("Yuborish")}
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>{modalMessage}</p>
            <button onClick={closeModal}>{t("Close")}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUs;
