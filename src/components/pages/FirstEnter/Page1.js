import { useUser } from "../../../Provider/UserProvider/UserHook";

const Page1 = () => {
  //подстраница для первого входа
    const { currentPage, setCurrentPage } = useUser();
  return (
    <div className="first-enter">
      <div className="tittle-info">
        <h1 className="Ftitle">Добро пожаловать</h1>
        <p className="Fintroduction">
          Рады видеть вас в нашей компании..... Приложении и куча текста текс
          текст текст текст текст{" "}
        </p>
      </div>
      <div className="first-enter--navigation">
        {/* <button class="previous" id="previous">
          назад
        </button> */}
        <button className="next" id="next" onClick={()=>setCurrentPage(currentPage+1)}>
          вперед
        </button>
        
      </div>
    </div>
  );

  //   return (
  //     <div className="welcome-page">
  //       <div className="tittle-info">
  //         <h1 className="title">Добро пожаловать</h1>
  //         <p className="introduction">
  //           Рады видеть вас в нашей компании..... Приложении и куча текста текс
  //           текст текст текст текст{" "}
  //         </p>
  //       </div>
  //       <div className="navigation">
  //         {/* <button className="previous" id="previous">
  //           назад
  //         </button> */}
  //         <button className="next" id="next">
  //           вперед
  //         </button>
  //       </div>
  //     </div>
  //   );
};
export default Page1;
