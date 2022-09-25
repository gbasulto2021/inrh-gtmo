import React, {useState, useContext, useEffect} from "react";
import Button from "../commons/Button";
import Nav from "../commons/Nav";

import Loader from "./Loader";
import { useNavigate} from "react-router-dom";
// import AuthContext from "../context/AuthContext";

const initialLoginForm = {
  email: "",
  pass:""
}

const Login = () => {
  const [loginForm, setLoginForm] = useState(initialLoginForm)
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

const loginUser = async (dataLogin)=>{
    
  let url = "http://localhost:5500/auth";
      let options = {
        method:'POST',
        mode:'cors',
        body: JSON.stringify(dataLogin),
        headers: { "Content-type": "application/json" },
      };
try {
  setIsLoading(true);
  const response = await fetch(url, options)
  const res = await response.json()
  console.log(res);
  window.localStorage.setItem("user", JSON.stringify(res.data)) 
  setIsLoading(false);
  setMessage(res.statusText);
  setTimeout(()=>{
    setMessage(null)
    navigate('/dashboard')
  },1000)
  
} catch (error) {
  console.log(error)
}
  
 
  }


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
        <Nav />
        <form className="login__form" onSubmit={handleLoginSubmit}>
          <div className="login__user">
          <label htmlFor="user"><span className="material-symbols-outlined">Person</span></label>
          <input type="email" placeholder="usuario" id="email" name="email" value={loginForm.email} onChange={(e)=>handleChangeLogin(e)} />
          </div>
          <div className="login__password">
          <label><span className="material-symbols-outlined">lock</span></label>
          <input type="password" placeholder="contraseña" id="pass" name="pass" value={loginForm.pass} onChange={(e)=>handleChangeLogin(e)}/>
          </div>
          <Button text="Entrar"/>
          {isLoading && <Loader />}
          {message && <p className="message">{message}</p>}      
        </form>
      </div>
    </>
  );
};

export default Login;
