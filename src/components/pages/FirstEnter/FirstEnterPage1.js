import { useState } from "react";
import "./FirstEnter.css";
import Page1 from "./Page1";
import { useUser } from "../../../Provider/UserProvider/UserHook";
import Page2 from "./Page2";
import Page3 from "./Page3";

const FirstEnter = () => {
  //страница первого вхождения (проверяется булевый тип с базы)

  const { currentPage, setCurrentPage } = useUser();
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    console.log("diff = ", diff);

    if (diff > 5) {
      console.log("следующий");
      next();
    } else {
      console.log("предыдущий");
      prev();
    }

    // if (diff < -5) {

    // }

    setTouchPosition(null);
  };
  const next = () => {
    if (currentPage != 3) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  };

 

  switch (currentPage) {
    case 1:
      return (
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          // onMouseDown={(e) => down(e)}
          // onMouseUp={(e) => {
          //   up(e);
          // }}
        >
          <Page1></Page1>
        </div>
      );
      break;
    case 2:
      return (
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          // onMouseDown={(e) => down(e)}
          // onMouseUp={(e) => {
          //   up(e);
          // }}
        >
          <Page2></Page2>
        </div>
      );
      break;
    case 3:
      return (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          <Page3></Page3>
        </div>
      );
      break;
  }
};

export default FirstEnter;
