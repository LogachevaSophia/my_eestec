import { useUser } from "../../../Provider/UserProvider/UserHook";
import Footer from "../../Footer/Footer";

const Results = ({scoree})=>{

  //страница для показа результатов
    const { currentPage, setCurrentPage, score, setScore, setStep, setLevel, level } = useUser();
    return(<div>
            <h1>your score is {
            //localStorage.getItem('currentScore')
        scoree}</h1>
        <Footer/>
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
    </div>)
}
export default Results;