import "./PrintWay.css";

export default function PrintWay() {
  return (
    <div className="print_way">
      <h1 className="print_way_title">СПОСОБЫ НАНЕСЕНИЯ ПРИНТОВ И ВЫШИВКА</h1>
      <div className="silkscreen">
        <h1 className="silkscreen_title">Шелкография (Трафаретная печать)</h1>

        <p className="silkscreen_desc">
          Шелкография — один из самых распространенных способов нанесения. Он
          заключается в пропускание краски через трафаретную сетку. Этот способ
          актуален для партий от 50 штук. Чем больше партия, тем дешевле будет
          стоить нанесение. Помимо оплаты самого принта, в цену включается
          стоимость изготовления трафаретов для печати, из-за чего способ не
          подходит для маленьких партий.
        </p>
        <p className="silkscreen_desc">
          Трафаретная печать подходит для нанесению почти на любых изделиях:
          футболках, толстовках, кружках, сумках, зонтах и т.д. Принты,
          сделанные данным способом имеют высокую износостойкость, не требуют
          особого ухода и прослужат довольно долго.
        </p>
      </div>

      <div className="digi_print">
        <h1 className="silkscreen_title">
          Цифровая печать (Фотопечать, Прямая печать)
        </h1>
        <p className="silkscreen_desc">
          Данный способ нанесения позволяет перенести любое изображение на вашу
          одежду. Так же он подходит для любой партии от 1 штуки. Такие принты
          делают на специальных текстильных принтерах, основанных на технологии
          струйной печати с использованием сушильного устройства или
          термопресса.
        </p>
        <p className="silkscreen_desc">
          Цифровая печать обычно используется для промоакций, когда нет
          необходимости делать большое количество принтов. Этот способ влечет за
          собой некоторые минусы, например особый уход за изделием. Одежду с
          таким принтом следует правильно стирать и нельзя гладить по принту.
          Способ оправдан при партиях 1-20 изделий.
        </p>
      </div>

      <div className="thermal_app">
        <h1 className="silkscreen_title">Термотрансфер (Термоаппликация)</h1>
        <p className="silkscreen_desc">
          Этот способ подразумевает собой перевод изображение со специальной
          бумаги на ткань под воздействием высокой температуры и давления.
          Принт, нанесенный данным способом ощущается как пленка.
        </p>
        <p className="silkscreen_desc">
          Данный способ имеет преимущества и недостатки, как и любой другой
          способ. Из плюсов можно отметить низкую себестоимость, быструю
          скорость нанесения, большое количество цветов. Из недостатков:
          ощущение пленки(нельзя назвать полноценным минусом, потому что
          некоторые задумывают именно такой эффект), долгая подготовка к печати.
        </p>
      </div>

      <div className="sublimation">
        <h1 className="silkscreen_title">Сублимация</h1>
        <p className="silkscreen_desc">
          Этот способ подходит только для синтетической ткани(чаще всего это
          полиэстер). Суть этого нанесения схожа с термотрансфер, тут тоже
          изображение переноситься с промежуточного носителя(сублимационной
          бумаги) на изделие с помощью высокой температуры и давления.
        </p>
        <p className="silkscreen_desc">
          Основным минусом данного способа является невозможность нанесения на
          натуральную ткань. Печать на хлопке - невозможно.
        </p>
      </div>

      <div className="embroidery">
        <h1 className="silkscreen_title">Вышивка на одежде</h1>
        <p className="silkscreen_desc">
          Один из самых интересных способов нанесения изображения на одежду.
          Вышивка долговечна, без проблем переносит механические воздействия.
          Данный вид нанесения выглядит наиболее эффектно и прослужит дольше
          всего.
        </p>
        <p className="silkscreen_desc">
          Вышивку можно производить как на готовых изделиях, так и на крое и
          тканях. Принимаются заказы от 1 штуки.
        </p>
      </div>
    </div>
  );
}
