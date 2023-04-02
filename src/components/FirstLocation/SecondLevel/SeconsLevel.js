import { useState } from "react";
import "./SecondLevel.css";
import { useUser } from "../../../Provider/UserProvider/UserHook";
import Footer from "../../Footer/Footer";

const Second_Level = () => {
  //расположить в правильном порядке
  const { setLevel, level, setCurrentPage, step, setStep } = useUser();
  const [cardList, setcardList] = useState([
    { id: 1, order: 3, text: "Залить молоко" },
    { id: 2, order: 1, text: "Почистить картошку" },
    { id: 3, order: 2, text: "Отварить картошку" },
    { id: 4, order: 4, text: "Сделать пюре" },
  ]);
  const [currenCard, setcurrenCard] = useState(null);
  function drugStartHandler(e, card) {
    setcurrenCard(card);
  }
  function drugOverHandler(e) {
    e.preventDefault();
    e.target.style.background = "lightgray";
  }
  function drugEndHandler(e, card) {
    e.target.style.background = "white";
  }
  function dropHandler(e, card) {
    e.preventDefault();
    setcardList(
      cardList.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currenCard.order };
        }
        if (c.id === currenCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      })
    );
    e.target.style.background = "white";
  }
  function drugLeaveHandler(e, card) {}

  function checkresult() {
    let fl = true;
    for (let i = 1; i < cardList.length; i++) {
      if (cardList[i].order < cardList[i - 1].order) {
        fl = false;
        break;
      }
    }
    return fl;
  }
  const sortCard = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  return (
    <div>
      <h1>
        Расположите в порядке возрастания приоритетность заданий в карточке
      </h1>
      {cardList.sort(sortCard).map((elem) => {
        return (
          <div
            className="cardd"
            onDragStart={(e) => drugStartHandler(e, elem)}
            onDragLeave={(e) => drugLeaveHandler(e)}
            onDragEnd={(e) => drugEndHandler(e)}
            onDragOver={(e) => drugOverHandler(e)}
            onDrop={(e) => dropHandler(e, elem)}
            draggable={true}
          >
            {" "}
            {elem.text}
          </div>
        );
      })}
      <button
        className=""
        onClick={() => {
          if (checkresult()) {
            setLevel(6);
            setStep(3);
          }
        }}
      >
        Сдать задание
      </button>
      <div className="empty"></div>
      <Footer />
      {/* <footer>
              <div className="roadmap--navigation">
                <button
                  className="documents"
                  id="documents"
                  onClick={() => {setCurrentPage(0); setStep(3)}}
                >
                  Инвентарть
                </button>
                <button
                  className="roadmap"
                  id="roadmap"
                  onClick={() => {setCurrentPage(1); setStep(3)}}
                >
                  Карта
                </button>
                <button
                  className="case"
                  id="case"
                  onClick={() => {setCurrentPage(2); setStep(3)}}
                >
                  Задание
                </button>
              </div>
            </footer> */}
    </div>
  );
};
export default Second_Level;
