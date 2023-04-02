import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }) {

  //переменные, которые используются в глобальном стэйте
  const [user, setUser] = useState({ id: 0, name: null });
  const [step, setStep] = useState(0);
  const [dataquestions, setdataquestions] = useState([]);
  const [level, setLevel] = useState(4);
  const [score, setScore] = useState(0);


  //массив для задаяни чекпоинтов на карте
  const [stateButtoncss, setstateButtoncss] = useState([
    [[37,15],[31,56]],
    [[17,17],[47,55],[73,67]],
    [[72,8],[52,18],[37,42],[15,68]],
    [[32,8],[46,22],[55,38],[64,58],[77,77]],
    [[68,25],[43,50]],
    [[56,25],[58,71]],
    [[54,39],[45,78]],
    [[45,25],[70,71]],
    [[30,25],[58,71]]]);

  // 0 - страница с кнопкой "Начать", 1 - форма входа, 2 - приветственная страница, 3 - карта, 4 - 1 первая локация 1 уровень, 5 - 1 первая локация 2 уровень
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        step,
        setStep,
        currentPage,
        setCurrentPage,
        score,
        setScore,
        dataquestions,
        setdataquestions,
        level,
        setLevel,stateButtoncss, setstateButtoncss
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
