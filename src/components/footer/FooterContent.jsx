import "./FooterContent.css";

export default function FooterContent({
  items,
  handleMenuSelect,
  sectionRefs,
}) {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_section">
          <h4>Карта сайта</h4>
          <ul>
            {items.map((item) => {
              return (
                <li key={item.key}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuSelect({ key: item.key });
                      const section = sectionRefs.current[item.key];
                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer_section">
          <h4>Контакты</h4>
          <ul>
            <li>
              Почта:{" "}
              <a
                href="mailto:makaryan.sergey99@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                makaryan.sergey99@gmail.com
              </a>
            </li>
            <li>Телефон: +7 (903) 788-80-03</li>
            <li>Адрес: ул. Главная 123, Город, Страна</li>
          </ul>
        </div>
      </div>
      <div className="footer_copyright">
        © {new Date().getFullYear()} «Кроим&Шьём». Все права защищены.
        <p>
          Created by{" "}
          <a
            href="https://htflow-45517.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTWebsite
          </a>
        </p>
      </div>
    </footer>
  );
}
