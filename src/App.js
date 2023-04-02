import "./App.css";
import FormRegistration from "./components/FormReg/FormRegistration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageFormRegistration from "./components/pages/PageFormRegistration/PageFormRegistration";
import { useUser } from "./Provider/UserProvider/UserHook";
import Welcome from "./components/pages/Welcome/welcome";
import FirstEnter from "./components/pages/FirstEnter/FirstEnterPage1";
import RoadMap from "./components/pages/RoadMap/RoadMap";
import SecondLevel from "./components/FirstLocation/FirstLevel/FirstLevel";
import Results from "./components/pages/Results/Results";
import { useEffect, useState } from "react";
import axios from "axios";
import Second_Level from "./components/FirstLocation/SecondLevel/SeconsLevel";
import FirstLevel from "./components/SecondLocation/FirstLevel";
import Office from "./components/Office/Office";

function App() {
  const { user, step, setStep, score, setdataquestions, setLevel } = useUser();

  // const getdata = async () => {
  //   const res = await axios
  //     .get(`https://vps70590.xxvps.net:9050/getquestions`, {
  //       params: { id_level: 5 },
  //     })
  //     setdataquestions(res.data.result);
  // };
  // getdata();

  const data = [
    { q: "ты любишь шаву", ans: 1 },
    { q: "Ты видел драконов?", ans: 0 },
    { q: "Ты человек?", ans: 1 },
  ];

  if (step - Math.floor(step) == 0) {
    if (step == 0) {
      //welcome page
      return (
        <div className="App">
          <Welcome></Welcome>
        </div>
      );
    }
    if (step == 1) {
      if (user.id == 0) {
        return (
          <div className="App">
            <FormRegistration></FormRegistration>
          </div>
        );
      } else {
        if (user.first_enter) {
          //если первый вход, тогда мы показываем преветственну страницу
          setStep(2);
          setLevel(2);
          return (
            <div>
              <FirstEnter></FirstEnter>
            </div>
          );
        } else {
          setStep(3);
          setLevel(4);
          //сразу показываем карту
          //setStep(4);
        }
      }
    }
    if (step == 2) {
      //первый вход
      return (
        <div>
          <FirstEnter></FirstEnter>
        </div>
      );
    }
    if (step == 3) {
      //карта
      return (
        <div>
          <RoadMap></RoadMap>
        </div>
      );
    }
    if (step == 4) {
      //данетка
      

      //первый уровень
      return <SecondLevel data={data}></SecondLevel>;
    }
    if (step == 5) {
      return <Second_Level></Second_Level>;
    }
    if (step == 6) {
      return <FirstLevel></FirstLevel>;
    }
    if (step == 7) {
      return <Office></Office>;
    }
  } else {
    return <Results score={score}></Results>;
  }
}

export default App;
