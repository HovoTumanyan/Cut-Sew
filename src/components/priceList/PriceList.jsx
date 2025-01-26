import { Card, Row, Col } from "antd";
import data from "../../data";
import "./PriceList.css";

export default function PriceList() {
 
  return (
    <div className="price-list">
      <h1>
        ЦЕНЫ НА ПОШИВ ОДЕЖДЫ
        <br />И РАЗРАБОТКУ ЛЕКАЛА
      </h1>
      <Row gutter={[16, 16]}>
        {data.tailoring.map((item, index) => (
          <Col xs={24} sm={24} lg={12} key={index}>
            <div>
              <Card className="price-card">
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="price-card-icon"
                  />
                )}
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="price-card-price">{item.price}</div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      <h2 className="price_line">
        <hr />
      </h2>
      <Row gutter={[16, 16]}>
        {data.patterns.map((item, index) => (
          <Col xs={24} sm={24} lg={12} key={index}>
            <div>
              <Card className="price-card">
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="price-card-icon"
                  />
                )}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="price-card-price">{item.basePrice}</div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      <p className="text">
        Наше швейное производство имеет большой опыт в пошиве одежды любых
        видов. Мы принимает заказ на пошив крупны и мелким оптом в Москве и
        Области. Имеем большое и организованное производство с новым современным
        оборудованием, наш штат опытных швей и конструкторов одежды обеспечивает
        премиальное качество выпускаемой продукции. При всем этом мы имеем
        демократичные цены.
      </p>
      <p className="text">
        Так же наша компания занимается разработкой лекал и дизайном одежды.
        Если вы давно хотели запустить свой бренд уличной одежды, платьев,
        повседневной одежды или любой другой одежды — вы пришли по адресу. Мы
        работаем со многими начинающими и успешными брендами одежды, многие из
        которых начали свой путь именно с нас!
      </p>
      <p className="text">
        Помимо дизайнерской одежды мы производим одежду для любого бизнеса:
        рекламную одежду для промо акций, форму для ресторанов и кафе, спец
        одежду для рабочих и многое другое. Будьте уверенны — мы сможем
        удовлетворить вашу потребность в лучшем виде, соблюдая при этом сроки!
      </p>
    </div>
  );
}
