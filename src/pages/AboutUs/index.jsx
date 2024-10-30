import styles from "./style.module.scss";
import banner from "../../assets/images/planedback.png";
import { useEffect, useState } from "react";
import { getRequest, postRequest } from "../../utils/request";
import { about_us, postdata } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Yuborish jarayoni yuklanishi
  const [modalOpen, setModalOpen] = useState(false); // Modal ochiq yoki yo'q holati
  const [modalMessage, setModalMessage] = useState(""); // Modalda ko'rsatiladigan xabar

  useEffect(() => {
    getRequest(about_us)
      .then((response) => {
        setData(response?.data);
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

  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.banner}>
          <img src={banner} alt="banner" />
        </div>
        <div className={styles.text_part}>
          <h3>Tashkilot haqida</h3>
          <span>{data?.description}</span>
        </div>
      </div>
      <div className={styles.contact}>
        <div className="container">
          <div className={styles.boxes}>
            <div className={styles.text_part}>
              <span className={styles.one}>Biz bilan bo’g’lanib savolaringizga javob oling</span>
              <br />
              <br />
              <span className={styles.two}>Aloqa nomeri</span>
              <br />
              <span className={styles.three}>+998945854512</span>
            </div>
            <div className={styles.form_part}>
              <input type="text" placeholder="F.I.SH" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Telefon raqam" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <button onClick={handleSubmit} disabled={loading}>{loading ? t("Yuborilmoqda...") : t("Yuborish")}</button>
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
