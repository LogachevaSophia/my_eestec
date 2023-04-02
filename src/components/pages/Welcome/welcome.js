
import './welcome.css';
import './normalize.css';
import { useUser  } from '../../../Provider/UserProvider/UserHook';

const Welcome = () => {
  const { user, setStep,step, setLevel,level } = useUser();
  return (
    <div className="welcome-page">
      <div className="tittle-info">
        <h1 className="title">Приветствие</h1>
        <p className="introduction">
          Рады видеть вас в нашей компании..... Приложении и куча текста текс
          текст текст текст текст{" "}
        </p>
      </div>
      <div className="login-section">
        <button className="enter" id="enter" onClick={()=>{setStep(1); setLevel(level+1);}}>
          Войти
        </button>
      </div>
    </div>
  );
};
export default Welcome;
