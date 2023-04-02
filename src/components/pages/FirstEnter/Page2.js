import { useUser } from "../../../Provider/UserProvider/UserHook";

const Page2 = () => {
  //подстраница для первого входа
    const { currentPage, setCurrentPage } = useUser();
    return (
      <div className="first-enter">
        <div className="tittle-info">
          <h1 className="Ftitle">Вводная информация</h1>
          <p className="Fintroduction">
            Рады видеть вас в нашей компании..... Приложении и куча текста текс
            текст текст текст текст{" "}
          </p>
        </div>
        <div className="first-enter--navigation">
          <button className="previous" id="previous" onClick={()=> setCurrentPage(currentPage-1)}>
            назад
          </button>
          <button className="next" id="next" onClick={()=> setCurrentPage(currentPage+1)}>
            вперед
          </button>
        </div>
      </div>
    );
  };
  export default Page2;
  