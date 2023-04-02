import { useState } from "react";
import { useUser } from "../../Provider/UserProvider/UserHook";
import "./Office.css";
import of from "./office.png";
//компонент, отвечающий за интерактив с комнатами офиса

const Office = () => {
  const [visible1, setvisible1] = useState("none");
  const [inp1, setinpp1] = useState("");

  const [visible2, setvisible2] = useState("none");
  const [inp2, setinpp2] = useState("");

  const [visible3, setvisible3] = useState("none");
  const [inp3, setinpp3] = useState("");

  const mas = ["Аналитики", "Менеджеры", "Тестировщики", "Бухгалтеры"];

  const { setLevel, setStep } = useUser();

  function check() {
    if (inp1 == mas[0] && inp2 == mas[1] && inp3 == mas[2]) {
      setStep(3);
      setLevel(8);
    }
  }

  return (
    <div class="office-box">
       <h1>Схема здания</h1>
      <div class="office-page">
        <img src={of} class="office" />
        <button
          className="officeBut"
          style={{ top: "5%", left: "5%", height: "35%", width: "30%" }}
          onClick={() => {
            setvisible1("block");
            setvisible2("none");
            setvisible3("none");
          }}
        >
          but1
        </button>
        <button
          className="officeBut"
          style={{ top: "5%", left: "37%", height: "35%", width: "13%" }}
          onClick={() => {
            setvisible2("block");

            setvisible1("none");
            setvisible3("none");
          }}
        >
          but2
        </button>
        <button
          className="officeBut"
          style={{ top: "5%", left: "53%", height: "35%", width: "20%" }}
          onClick={() => {
            setvisible3("block");

            setvisible2("none");
            setvisible1("none");
          }}
        >
          but3
        </button>
        <button
          className="officeBut"
          style={{ top: "5%", left: "75%", height: "35%", width: "20%" }}
        >
          but4
        </button>
        </div>
        <input
          type="text"
          placeholder="but1"
          style={{ display: `${visible1}` }}
          class="evacuation"
          onChange={(e) => setinpp1(e.target.value)}
        />

        <input
          type="text"
          placeholder="but2"
          style={{ display: `${visible2}` }}
          class="evacuation"
          onChange={(e) => setinpp2(e.target.value)}
        />
        <input
          type="text"
          placeholder="but3"
          style={{ display: `${visible3}` }}
          class="evacuation"
          onChange={(e) => setinpp3(e.target.value)}
        />
        <button onClick={() => check()} className = "submit">Сдать задание</button>
        {/* <input type="text" class="evacuation"/>
        <input type="text" class="evacuation"/>
        <input type="text" class="evacuation"/>
        <input type="text" class="evacuation"/>
        <input type="text" class="evacuation"/>
        <button class="submit" onclick="checkAnswers()">Отправить</button> */}
      </div>
  
  );
};
export default Office;
