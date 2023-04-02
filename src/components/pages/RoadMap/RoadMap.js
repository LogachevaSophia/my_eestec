import { useUser } from "../../../Provider/UserProvider/UserHook";
import "./RoadMap.css";
import loc1 from "./images/map_1.jpg";
import loc2 from "./images/map_2.jpg";
import loc3 from "./images/map_3.jpg";
import loc4 from "./images/map_3-1.jpg";
import loc5 from "./images/map_4.jpg";
import loc6 from "./images/map_5.jpg";
import loc7 from "./images/map_6.jpg";
import loc8 from "./images/map_7.jpg";
import loc9 from "./images/map_8.jpg";
import { useState } from "react";
import SecondLevel from "../../FirstLocation/FirstLevel/FirstLevel";
import Footer from "../../Footer/Footer";

const RoadMap = () => {
  //карта
  const {
    setStep,
    setCurrentPage,
    currentPage,
    level,
    stateButtoncss,
    setstateButtoncss,
  } = useUser();
  const [touchPosition, setTouchPosition] = useState(null);
  const [currInventory, setcurrInventory] = useState(0);

  //локации
  const mas = [loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8, loc9];

  const handleTouchStart = (e) => {
    //обработка тача для смахивания влево и вправо (из карты можно выйти в инвентарь и в задание)
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    //обработка тача
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    console.log("diff = ", diff);

    if (diff > 5) {
      console.log("следующий");
      next();
    } else {
      if (diff < -5) {
        console.log("предыдущий");
        prev();
      }
    }

    setTouchPosition(null);
  };
  const next = () => {
    if (currentPage != 2) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = () => {
    console.log("prev");
    if (currentPage != 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const cl1 = "btn";
  const cl2 = "btn--close";
  const cl3 = "btn--ready";
  let stateLevel = 0;
  console.log("level = ", level);

  switch (currentPage) {
    //в зависимости от current page выводится: инвентарь, карта или задание
    case 1:
      return (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          <div className="main-page">
            {stateButtoncss.map((elem, ind) => {
              return (
                //изменение классов button для активных/не активных/текущих кнопок
                <div className="map-section">
                  <img src={mas[ind]} />
                  {stateButtoncss[ind].map((item, index) => {
                    stateLevel += 1;
                    if (level < stateLevel) {
                      return (
                        <button
                          position="1"
                          style={{ left: `${item[0]}%`, top: `${item[1]}%` }}
                          className="btn btn--close"
                        ></button>
                      );
                    } else {
                      if (level == stateLevel) {
                        return (
                          <button
                            position="1"
                            style={{ left: `${item[0]}%`, top: `${item[1]}%` }}
                            className="btn"
                            onClick={() => {
                              setStep(level);
                              setCurrentPage(0);
                            }}
                          ></button>
                        );
                      } else {
                        return (
                          <button
                            position="1"
                            style={{ left: `${item[0]}%`, top: `${item[1]}%` }}
                            className="btn  btn--ready"
                          ></button>
                        );
                      }
                    }
                  })}
                </div>
              );
            })}

            <div className="end-empty"></div>
           
            <Footer />
          </div>
        </div>
      );

    case 0:
      if (currInventory == 0) {
        return (
          <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className="upmenu clearfix">
              Инвентарь
              <button
                className="case"
                onClick={() => {
                  setcurrInventory(0);
                }}
              >
                Контакты
              </button>
              <button
                className="case"
                onClick={() => {
                  setcurrInventory(1);
                }}
              >
                Документы
              </button>
            </div>
            <table>
              <caption>Контакты сотрудников</caption>
              <tr>
                <th>Человек</th>
                <th>Контакт</th>
              </tr>
              <tr>
                <td>Глава отдела анатилитики</td>
                <td>+795151354532 </td>
              </tr>
              <tr>
                <td>Глава отдела разработки</td>
                <td>+795151363512</td>
              </tr>
              <tr>
                <td>глава отдела менеджмента</td>
                <td>+795135123512</td>
              </tr>
              <tr>
                <td>Глава отдела HR</td>
                <td>+795135123512</td>
              </tr>
            </table>
            <Footer />
          </div>
        );
      } else {
        return (
          <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className="upmenu clearfix">
              Инвентарь
              <button
                className="case"
                onClick={() => {
                  setcurrInventory(0);
                }}
              >
                Контакты
              </button>
              <button
                className="case"
                onClick={() => {
                  setcurrInventory(1);
                }}
              >
                Документы
              </button>
            </div>
            <table>
              <caption>Документация</caption>
              <tr>
                <th>Документ</th>
                <th>Ссылка</th>
              </tr>
              <tr>
                <td>Отпускные</td>
                <td>Ссылка на отпускные</td>
              </tr>
              <tr>
                <td>Премии</td>
                <td>Ссылка на премии</td>
              </tr>
              <tr>
                <td>Нормативные документы</td>
                <td>Ссылка на нормативные документ</td>
              </tr>
              <tr>
                <td>ПАмАгИтИ</td>
                <td>Ссылка на моральную помощь</td>
              </tr>
            </table>
            <Footer />
          </div>
        );
      }

    case 2:
      setStep(level);
      setCurrentPage(0);
      return (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          
          <Footer />
        </div>
      );
  }
};
export default RoadMap;
