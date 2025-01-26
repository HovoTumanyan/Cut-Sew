import Icon1 from "../../assets/icons/icon-1.png";
import Icon2 from "../../assets/icons/icon-2.png";
import Icon3 from "../../assets/icons/icon-3.png";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="main_banner">
      <div className="banner_hello">
        <h1>КРОИМ <span className="banner_connection">&</span> ШЬЕМ</h1>
        <p className="banner_hello_desc">
          ПОШИВ ОДЕЖДЫ НА ЗАКАЗ ЛЮБОЙ СЛОЖНОСТИ
        </p>
        <div className="process_icons">
          <div className="icons_info">
            <img src={Icon1} alt="" />
            <p className="icons_title">
              Партии от 10 штук <br />
              (трикотаж)
            </p>
          </div>
          <div className="icons_info">
            <img src={Icon2} alt="" />
            <p className="icons_title">Сроки от 1 дня</p>
          </div>{" "}
          <div className="icons_info">
            <img src={Icon3} alt="" />
            <p className="icons_title">Разработка лекала</p>
          </div>
        </div>
      </div>
    </div>
  );
}
