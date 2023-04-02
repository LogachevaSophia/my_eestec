import "./FormRegistration.css";
import axios from "axios";
import { useState } from "react";
import { useUser } from "../../Provider/UserProvider/UserHook";

const FormRegistration = () => {
  //форма входа
  const [login, setName] = useState();
  const [pass, setPass] = useState();
  const { setUser, step } = useUser();

  const getuser = async () => {
    console.log("i am in getuser");
    const res = await axios.get(`https://vps70590.xxvps.net:9050/enter`, {
      params: { login: login, pass: pass },
    });
    console.log(res);
    setUser(res.data.result[0]);
    localStorage.setItem("user", JSON.stringify(res.data.result[0]));
    
    return res.result;
  };

  
  return (
    <div className="registration--page">
      <div className="registration">
        <h1 className="registration--title">вход</h1>
        <div className="registration--input">
          <input
            className="login"
            type="login"
            name="browser"
            placeholder="login..."
            onChange={(e) => setPass(e.target.value)}
          ></input>
          <input
            className="pswd"
            type="password"
            name="browser"
            placeholder="password..."
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button className="enter-in" id="enter" onClick={()=>getuser()}>войти</button>
      </div>
    </div>
  );
  // return (
  //   <form onSubmit={onSubmit}>
  //     <div className="container">
  //       <label >
  //         <b>Email</b>
  //       </label>
  //       <input
  //         type="text"
  //         placeholder="Enter Email"
  //         name="email"
  //         required
  //         onChange={(e) => setName(e.target.value)}
  //       ></input>

  //       <label for="pass">
  //         <b>pass</b>
  //       </label>
  //       <input
  //         type="password"
  //         placeholder="Enter Password"
  //         name="pass"
  //         required
  //         onChange={(e) => setPass(e.target.value)}
  //       ></input>

  //       {/* <p>
  //         By creating an account you agree to our{" "}
  //         <a href="#">Terms & Privacy</a>.
  //       </p> */}
  //       <button

  //         className="registerbtn"

  //       >
  //         Register
  //       </button>
  //     </div>
  //     {/* <div class="container signin">
  //       <p>
  //         Already have an account? <a href="#">Sign in</a>.
  //       </p>
  //     </div> */}
  //   </form>
  // );
};
export default FormRegistration;
