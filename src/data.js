import item1 from "./assets/items/item-1.jpg";
import item2 from "./assets/items/item-2.jpg";
import item3 from "./assets/items/item-3.jpg";
import item4 from "./assets/items/item-4.jpg";
import item5 from "./assets/items/item-5.jpg";
import item6 from "./assets/items/item-6.jpg";
import item7 from "./assets/items/item-7.jpg";
import item9 from "./assets/items/item-9.jpg";

const priceData = {
  tailoring: [
    {
      title: "Пошив футболок",
      description: "Футболка с коротким рукавом",
      price: "от 180₽",
      icon: item1,
    },
    {
      title: "Пошив свитшотов",
      description: "Классический свитшот, манжеты (кашкорсе/рибана)",
      price: "от 300₽",
      icon: item2,
    },
    {
      title: "Пошив худи",
      description:
        "Толстовка с капюшоном, манжеты (кашкорсе/рибана), карман-кенгуру",
      price: "от 520₽",
      icon: item3,
    },
    {
      title: "Пошив поло",
      description: "Рубашка-поло с коротким рукавом",
      price: "от 275₽",
      icon: item4,
    },
    {
      title: "Пошив платьев",
      description: "Платья оптом",
      price: "от 360₽",
      icon: item5,
    },
    {
      title: "Пошив курток",
      description: "Куртка летняя",
      price: "от 600₽",
      icon: item6,
    },
    {
      title: "Пошив дождевиков",
      description: "Надежные дождевики",
      price: "от 150₽",
      icon: item7,
    },
    {
      title: "Пошив масок",
      description: "Трикотажные многоразовые маски",
      price: "от 240₽",
      icon: item9,
    },
  ],
};

export const items = [
  { key: "1", label: "ГЛАВНАЯ" },
  { key: "2", label: "О НАС" },
  { key: "3", label: "ЦЕНЫ" },
  { key: "4", label: "ПОШИВ И ПРИНТЫ" },
  { key: "5", label: "КОНТАКТЫ" },
];

export default priceData;
