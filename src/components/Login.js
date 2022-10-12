import React, {useState, useContext} from "react";
import Button from "../commons/Button";
import Loader from "./Loader";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";



const initialLoginForm = {
  username: "",
  pass:""
}

const Login = () => {
  const {
    user,
    loginUser,
    isLoading,
    message,
   } = useContext(AuthContext)

  const [loginForm, setLoginForm] = useState(initialLoginForm)

const handleLoginSubmit = (e)=>{
  e.preventDefault();
   loginUser(loginForm);
   setLoginForm(initialLoginForm)
 }
const handleChangeLogin =(e)=>{
  
     setLoginForm({
      ...loginForm, [e.target.name]:e.target.value
     })
}


  return (
    <>
      <div className="login">
        
        <header className="header">
        <h2>INRH</h2>
        </header>
        <form className="login__form" onSubmit={handleLoginSubmit}>
          <div className="login__user">
          <label htmlFor="username"><span className="material-symbols-outlined">Person</span></label>
          <input type="text" placeholder="usuario" id="username" name="username" value={loginForm.username} onChange={(e)=>handleChangeLogin(e)} />
          </div>
          <div className="login__password">
          <label><span className="material-symbols-outlined">lock</span></label>
          <input type="password" placeholder="contraseña" id="pass" name="pass" value={loginForm.pass}  onChange={(e)=>handleChangeLogin(e)}/>
          </div>
          <Button text="Entrar"/>
          {isLoading && <Loader />}
          {message && <p className="message">{message}</p>}
          {user && <Navigate to ="/form"/>}   
        </form>
      </div>
    </>
  );
};

export default Login;
