import Icon1 from "../../assets/icons/icon-1.png";
import Icon2 from "../../assets/icons/icon-2.png";
import Icon3 from "../../assets/icons/right.png";
import { ImPhone, ImPhoneHangUp } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import "./Banner.css";

export default function Banner() {
  const [showContact, setShowContact] = useState(false);
  const modalRef = useRef(null);
  
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowContact(false);
    }
  };

  useEffect(() => {
    if (showContact) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showContact]);

  useEffect(() => {
    const openModal = setTimeout(() => {
      setShowContact(true);
    }, 3000);

    const closeModal = setTimeout(() => {
      setShowContact(false);
    }, 7000);

    return () => {
      clearTimeout(openModal);
      clearTimeout(closeModal);
    };
  }, []);

  return (
    <div className="main_banner">
      <div className="banner_hello">
        <h1>
          КРОИМ <span className="banner_connection">&</span> ШЬЕМ
        </h1>
        <p className="banner_hello_desc">
          ПОШИВ ОДЕЖДЫ НА ЗАКАЗ ЛЮБОЙ СЛОЖНОСТИ
        </p>
        <div className="process_icons">
          <div className="icons_info">
            <img src={Icon1} alt="" />
            <p className="icons_title">
              Партии от 500 единиц <br />
              на единицу SKU <br />
              (трикотаж/текстиль) <br />
            </p>
          </div>
          <div className="icons_info">
            <img style={{ width: "120px" }} src={Icon3} alt="" />
            <p className="icons_title">Работа с честным знаком</p>
          </div>
          <div className="icons_info">
            <img src={Icon2} alt="" />
            <p className="icons_title">Сроки от 7 дней</p>
          </div>{" "}
        </div>
      </div>
      <div ref={modalRef} className={`modal_contact ${showContact ? "openContacts" : ""}`}>
        {showContact ? (
          <ImPhoneHangUp
            size={25}
            onClick={() => setShowContact(!showContact)}
            style={{ color: "red", cursor: "pointer" }}
          />
        ) : (
          <ImPhone
            className="shake"
            size={25}
            onClick={() => setShowContact(!showContact)}
            style={{ color: "green", cursor: "pointer" }}
          />
        )}
        <a className="about_contact_info" href="tel:+79037888003">
          8 (903) 788-80-03 <span style={{ color: "white" }}>(Сергей)</span>
        </a>{" "}
        <FaLocationDot size={20} />
        <span style={{ color: "white" }}>Москва</span>
      </div>
    </div>
  );
}
