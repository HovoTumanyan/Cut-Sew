import { useEffect, useState, useRef } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { RxScissors } from "react-icons/rx";
const { Header, Content, Footer } = Layout;

import { items as baseItems } from "./data";
import Banner from "./components/header/Banner";
import About from "./components/aboutUs/About";
import PriceList from "./components/priceList/PriceList";
import TailoringMerch from "./components/tailoringMerch/TailoringMerch";
import PrintWay from "./components/printWay/PrintWay";
import Faq from "./components/faq/Faq";
import FooterContent from "./components/footer/FooterContent";
import { isMobileDevice } from "./utils/deviceUtils";
import { getFromSession, saveToSession } from "./utils/storageUtils";
import { createIntersectionObserver } from "./utils/intersectionUtils";
import "./App.css";

export default function App() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [observerActive, setObserverActive] = useState(true);

  // Сохраняем активный ключ в sessionStorage при его изменении (для восстановления состояния после обновления страницы).
  const [activeKey, setActiveKey] = useState(() =>
    getFromSession("activeKey", "1")
  );
  
  useEffect(() => {
    saveToSession("activeKey", activeKey);
  }, [activeKey]);

  // Отслеживаем изменения размера окна для определения мобильной версии.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  // Объект `sectionRefs` хранит ссылки на элементы секций страницы, чтобы к ним можно было легко обращаться.
  const sectionRefs = useRef({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  });

  useEffect(() => {
    const observer = createIntersectionObserver(
      (entries) => {
        if (!observerActive) return;
  
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveKey(entry.target.dataset.key);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    Object.values(sectionRefs.current).forEach((ref) => observer.observe(ref));
  
    return () => {
      Object.values(sectionRefs.current).forEach((ref) =>
        observer.unobserve(ref)
      );
    };
  }, [observerActive]);
  

  // При изменении активного ключа скроллим к соответствующей секции.
  useEffect(() => {
    const section = sectionRefs.current[activeKey];
    if (section) {
      section.scrollIntoView();
    }
  }, []);

  // Обработчик выбора элемента меню.
  const handleMenuSelect = ({ key }) => {
    setObserverActive(false); // Временно отключаем наблюдатель, чтобы избежать конфликтов.

    setTimeout(() => {
      setActiveKey(key);
      setObserverActive(true);
    }, 700);

    // Скроллим к выбранной секции.
    const section = sectionRefs.current[key];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (isMobile) {
      setDrawerVisible(false);
    }
  };

  // Обновляем иконки для элементов меню в зависимости от активного ключа.
  const items = baseItems.map((item) => {
    const isActive = item.key === activeKey;
    return {
      ...item,
      icon: isActive ? <RxScissors /> : null,
    };
  });
  return (
    <Layout>
      <Header>
        {isMobile ? (
          <>
            <Button
              type="text"
              icon={
                <div className="menu-icon-wrapper">
                  <span
                    className={`menu-icon ${drawerVisible ? "open" : "close"}`}
                  >
                    <CloseOutlined />
                  </span>
                  <span
                    className={`menu-icon ${drawerVisible ? "close" : "open"}`}
                  >
                    <MenuOutlined />
                  </span>
                </div>
              }
              onClick={() => setDrawerVisible(!drawerVisible)}
              style={{ fontSize: "24px" }}
            />

            <Drawer
              closable={true}
              onClose={() => setDrawerVisible(false)}
              open={drawerVisible}
            >
              <Menu
                mode="vertical"
                selectedKeys={[activeKey]}
                onSelect={handleMenuSelect}
                items={items}
              />
            </Drawer>
          </>
        ) : (
          <Menu
            theme="dark"
            selectable={true}
            mode="horizontal"
            selectedKeys={[activeKey]}
            onSelect={handleMenuSelect}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        )}
      </Header>
      <Content>
        <div className="container">
          <div ref={(el) => (sectionRefs.current[1] = el)} data-key="1">
            <Banner />
          </div>
          <div
            className="section"
            ref={(el) => (sectionRefs.current[2] = el)}
            data-key="2"
          >
            <About />
          </div>
          <div ref={(el) => (sectionRefs.current[3] = el)} data-key="3">
            <PriceList />
          </div>
          <div
            className="section"
            ref={(el) => (sectionRefs.current[4] = el)}
            data-key="4"
          >
            <TailoringMerch />
          </div>
          <PrintWay />
          <Faq />
        </div>
      </Content>
      <Footer
        className="section"
        ref={(el) => (sectionRefs.current[5] = el)}
        data-key="5"
      >
        <FooterContent
          items={items}
          sectionRefs={sectionRefs}
          handleMenuSelect={handleMenuSelect}
        />
      </Footer>
    </Layout>
  );
}
