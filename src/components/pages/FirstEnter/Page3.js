import { useUser } from "../../../Provider/UserProvider/UserHook";

const Page3 = () => {
  //подстраница для первого входа
    const { currentPage, setCurrentPage,setStep, setLevel, level } = useUser();
    return (
      <div className="first-enter">
        <div className="tittle-info">
          <h1 className="Ftitle">Вводная информация 2</h1>
          <p className="Fintroduction">
            Рады видеть вас в нашей компании..... Приложении и куча текста текс
            текст текст текст текст{" "}
          </p>
        </div>
        <div className="first-enter--navigation">
          <button className="previous" id="previous" onClick={()=>{setCurrentPage(currentPage-1)}}>
            назад
          </button>
          <button className="next" id="next" onClick={()=>{setStep(3); setLevel(4); setCurrentPage(0)}}>
            Завершить
          </button>
        </div>
      </div>
    );
  

  };
  export default Page3;
  