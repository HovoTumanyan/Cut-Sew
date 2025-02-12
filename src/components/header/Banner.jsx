import Icon1 from "../../assets/icons/icon-1.png";
import Icon2 from "../../assets/icons/icon-2.png";
import Icon3 from "../../assets/icons/right.png";
import { ImPhone, ImPhoneHangUp } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { useCallback, useEffect, useRef, useState } from "react";
import { CONTACT_INFO } from "../../data";
import "./Banner.css";

export default function Banner() {
  const [showContact, setShowContact] = useState(false);
  const modalRef = useRef(null);
  const MODAL_OPEN_DELAY = 3000;
  const MODAL_CLOSE_DELAY = 7000;

  const handleOutsideClick = useCallback((e) => {
    if (
      !modalRef.current ||
      !document.body.contains(e.target) ||
      modalRef.current.contains(e.target)
    )
      return;

    setShowContact(false);
  }, []);

  useEffect(() => {
    if (!showContact) return;

    document.addEventListener("mousedown", handleOutsideClick, {
      passive: true,
    });

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showContact, handleOutsideClick]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContact(true);
      setTimeout(
        () => setShowContact(false),
        MODAL_CLOSE_DELAY - MODAL_OPEN_DELAY
      );
    }, MODAL_OPEN_DELAY);

    return () => clearTimeout(timer);
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
      <div
        ref={modalRef}
        className={`modal_contact ${showContact ? "openContacts" : ""}`}
      >
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
          {CONTACT_INFO.phone} <span style={{ color: "white" }}>({CONTACT_INFO.name})</span>
        </a>{" "}
        <FaLocationDot size={20} />
        <span style={{ color: "white" }}>{CONTACT_INFO.location}</span>
      </div>
    </div>
  );
}
