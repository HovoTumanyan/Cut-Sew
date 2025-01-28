import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1 className="about_title">О НАС</h1>
      <p className="about_desc">
        <span className="company">Здравствуйте!</span> <br />
        Меня зовут Сергей, я представляю швейное производство{" "}
        <span className="company">«Кроим&Шьём»</span>. Мы предлагаем вашему
        бизнесу
        <span className="company">
          {" "}
          выгодное, долгосрочное сотрудничество{" "}
        </span>{" "}
        в области пошива трикотажа и текстиля.
      </p>

      <p className="about_desc">
        <span className="company">Наши основные направления:</span> <br />
        • Отшив 1-го, 2-го и 3-го слоя одежды <br />
        • Производство шоперов и других текстильных изделий. <br />
        • Разработка продукции с нуля по вашим требованиям. <br />• Контрактное
        производство с учетом вашего ТЗ, включая выполнение государственных и
        коммерческих заказов.
      </p>

      <p className="about_desc">
        Мы гибко подходим к потребностям наших клиентов и готовы предложить
        индивидуальные решения, соответствующие вашим бизнес-задачам. Мы
        уверены, что наше сотрудничество принесет обеим сторонам значительную
        пользу.
      </p>

      <p className="about_desc">
        Будем признательны за возможность обсудить детали и, если это
        необходимо, уточнить, к кому в вашей компании можно обратиться по
        данному вопросу.
        <span className="company">
          {" "}
          <br />
          Ждем обратной связи и надеемся на плодотворное сотрудничество!
        </span>
      </p>

      <div className="about_equipment_info">
        <div className="about_contact">
          <p>
            <strong>С уважением, Сергей Макарян </strong> <br />
            Швейное производство «Кроим&Шьём» <br />
            г. Москва
          </p>
          <p>
            Телефон:{" "}
            <a className="about_contact_info" href="tel:+79037888003">
              +7 (903) 788-80-03
            </a>{" "}
            <br />
            Почта:{" "}
            <a
              href="mailto:makaryan.sergey99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="about_contact_info"
            >
              <strong>makaryan.sergey99@gmail.com</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
