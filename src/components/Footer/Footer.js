import { useUser } from "../../Provider/UserProvider/UserHook";

const Footer = () => {
  const { setCurrentPage, setStep } = useUser();
  //нижняя панель
  return (
    <footer>
      <div className="roadmap--navigation">
        <button
          className="documents"
          id="documents"
          onClick={() => {
            setCurrentPage(0);
            setStep(3);
          }}
        >
          Инвентарть
        </button>
        <button
          className="roadmap"
          id="roadmap"
          onClick={() => {
            setCurrentPage(1);
            setStep(3);
          }}
        >
          Карта
        </button>
        <button
          className="case"
          id="case"
          onClick={() => {
            setCurrentPage(2);
            setStep(3);
          }}
        >
          Задание
        </button>
      </div>
    </footer>
  );
};
export default Footer;
