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
         
    </div>)
}
export default Results;