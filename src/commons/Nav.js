import React,{useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
     const [isLogged, setIsLogged] = useState(false)

     const location = useLocation();
    
  useEffect(()=>{
    const loggedUserJson =window.localStorage.getItem("user");
    if(loggedUserJson){
      setIsLogged(true)
                
    }else{
      setIsLogged(false)
     
    }
  },[])

  const logOut = ()=>{
    window.localStorage.removeItem("user")
  }


  return (
    <header className="header">
    <h2>INRH</h2>
    <nav className="header__nav">
      {location.pathname === "/"
       ? <Link to="/login" onClick={()=> logOut()}>{isLogged?"SALIR": "ENTRAR"}</Link>
       : <>
       <Link to="/">INICIO</Link>
       <Link to="/reports">REPORTES</Link>
       <Link to="/form">AGREGAR REPORTE</Link>
       <Link to="/login" onClick={()=> logOut()}>{isLogged?"SALIR": "ENTRAR"}</Link>
         </>
    }
      
      
    </nav>
    </header>
  );
};

export default Nav;
