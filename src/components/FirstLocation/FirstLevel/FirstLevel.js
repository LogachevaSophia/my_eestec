import { useEffect, useState } from "react";
import axios from "axios";
import "./FirstLevel.css";
import { useUser } from "../../../Provider/UserProvider/UserHook";
const SecondLevel = ({ data }) => {
  //данетка
  const { dataquestions, setdataquestions, step } = useUser();

  const [touchPosition, setTouchPosition] = useState(null);
  const {
    currentPage,
    setCurrentPage,
    score,
    setScore,
    setStep,
    setLevel,
    level,
  } = useUser();

  // const data = [
  //   { q: "ты любишь шаву", ans: 1 },
  //   { q: "Ты видел драконов?", ans: 0 },
  //   { q: "Ты человек?", ans: 1 },
  // ];
  const handleTouchStart = (e) => {
    //обработка тача
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    //обработка тача
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    } else {
      prev();
    }

    setTouchPosition(null);
  };

  const next = () => {
    //следующий слайд
    if (currentPage < data.length) {
      if (data[currentPage].ans == 0) {
        setScore(score + 1);
        const cur = Number(localStorage.getItem("currentScore"));
        if (cur == null) {
          localStorage.setItem("currentScore", 0);
        } else {
          localStorage.setItem("currentScore", cur + 1);
        }
      }

      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0);
      setLevel(5);
      setStep(3);
    }
  };
  const prev = () => {
    //предыдущий слайд
    if (currentPage < data.length) {
      if (data[currentPage].ans == 1) {
        setScore(score + 1);
        const cur = Number(localStorage.getItem("currentScore"));
        if (cur == null) {
          localStorage.setItem("currentScore", 0);
        } else {
          localStorage.setItem("currentScore", cur + 1);
        }
      }
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0);
      setLevel(5);
      setStep(3);
    }
  };
  if (currentPage < data.length) {
    return (
      <div class="cards-field">
        <div class="wrong-text">
          W R O N G W R O N G W R O N G W R O N G W R O N G W R O N G W R O N G
          W R O N G
        </div>
        <div class="right-text">
          R I G H T R I G H T R I G H T R I G H T R I G H T R I G H T R I G H T
          R I G H T
        </div>
        <div
          class="card"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {data[currentPage].q}
        </div>
      </div>
    );
  } else {
    setCurrentPage(0);
    setLevel(5);
    setStep(3);
  }

  //   return (
  //     <div
  //       onTouchStart={handleTouchStart}
  //       onTouchMove={handleTouchMove}>
  //       Hello
  //     </div>
  //   );
};
export default SecondLevel;
