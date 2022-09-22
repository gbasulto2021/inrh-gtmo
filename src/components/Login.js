import React from "react";
import Button from "../commons/Button";
import Nav from "../commons/Nav";

const Login = () => {
  return (
    <>
      <div className="login">
        <Nav />
        <form className="login__form">
          <div className="login__user">
          <label htmlFor="user"><span className="material-symbols-outlined">Person</span></label>
          <input type="text" placeholder="usuario" id="user" name="user" />
          </div>
          <div className="login__password">
          <label><span className="material-symbols-outlined">lock</span></label>
          <input type="password" placeholder="contraseña" id="password" name="password"/>
          </div>
          <Button text="Entrar"/>
                  
        </form>
      </div>
    </>
  );
};

export default Login;
