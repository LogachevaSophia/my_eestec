import { useState } from "react";
import { useUser } from "../../Provider/UserProvider/UserHook";
import "./FirstLevel.css";

const FirstLevel = () => {
  //интерактив с qr-code (квест по офису)
  const [qr1, setqr1] = useState(null);
  const [qr2, setqr2] = useState(null);
  const [qr3, setqr3] = useState(null);
  const [qr4, setqr4] = useState(null);
  const [qr5, setqr5] = useState(null);
  const rightAnsw = ["1", "2", "3", "4", "5"];
  const { setStep, setLevel, level } = useUser();
  function check() {
    if (
      rightAnsw.indexOf(qr1) != -1 &&
      rightAnsw.indexOf(qr2) != -1 &&
      rightAnsw.indexOf(qr3) != -1 &&
      rightAnsw.indexOf(qr4) != -1 &&
      rightAnsw.indexOf(qr5) != -1
    ) {
      setLevel(7);
      setStep(3);
    }
  }

  return (
    <div class="QRinput_conteiner">
      <h1>Ведите ссылки</h1>
      <div class="inputQR-box">
        <input
          className="input-QR"
          placeholder="qr1"
          onChange={(e) => {
            setqr1(e.target.value);
          }}
        ></input>
        <input
          className="input-QR"
          placeholder="qr2"
          onChange={(e) => {
            setqr2(e.target.value);
          }}
        ></input>
        <input
          className="input-QR"
          placeholder="qr3"
          onChange={(e) => {
            setqr3(e.target.value);
          }}
        ></input>
        <input
          className="input-QR"
          placeholder="qr4"
          onChange={(e) => {
            setqr4(e.target.value);
          }}
        ></input>
        <input
          className="input-QR"
          placeholder="qr5"
          onChange={(e) => {
            setqr5(e.target.value);
          }}
        ></input>
        
      </div>
      <button className= "btn_qrReady"
          onClick={() => {
            check();
          }}
        >
          Проверить
        </button>
    </div>
  );
};
export default FirstLevel;
