import scheme1 from "../../assets/scheme/scheme-1.png";
import scheme2 from "../../assets/scheme/scheme-2.png";
import scheme3 from "../../assets/scheme/scheme-3.png";
import scheme4 from "../../assets/scheme/scheme-4.png";
import "./TailoringMerch.css";


export default function TailoringMerch() {
  return (
    <>
      <div className="tailoring">
        <h1 className="tailoring_title">ПОШИВ МЕРЧА</h1>
        <p className="tailoring_desc">
          Наша швейная фабрика активно сотрудничает с медийными лицами (блогеры,
          актеры, реперы) в сфере разработки и пошива фирменного мерча! Если вы
          хотите удивить своих фанатов качественными продуктом по доступной
          цене? — Оставьте заявку на нашем сайте или позвоните, и вы убедитесь,
          что наши цены подойдут вам!
        </p>
      </div>
      <div className="scheme">
        <h1 className="scheme_title">СХЕМА РАБОТЫ С НАМИ</h1>
        <div className="scheme_chain">
          <div className="scheme_items">
            <img src={scheme1} alt="" />
            <p>
              Звоните или пишите на{" "}
              <a
                href="mailto:makaryan.sergey99@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--secondaryColor)" }}
              >
                почту
              </a>
              <br />
              <span className="items_span">+7 (903) 788-80-03</span>
            </p>
          </div>
          <div className="scheme_items">
            <img src={scheme2} alt="" />
            <p>
              Разрабатываем лекала <br />и{" "}
              <span className="items_span">шьем образец</span>
            </p>
          </div>
          <div className="scheme_items">
            <img src={scheme3} alt="" />
            <p>
              Шьем партию, маркируем <br />и{" "}
              <span className="items_span">наносим принт</span>
            </p>
          </div>
          <div className="scheme_items">
            <img src={scheme4} alt="" />
            <p>
              Упаковываем одежду <br />и{" "}
              <span className="items_span">отгружаем партию</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
