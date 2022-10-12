import React,{useEffect, useState, useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from '../context/AuthContext';



const Nav = () => {
     const [isLogged, setIsLogged] = useState(false)
     const {user,logOut} = useContext(AuthContext)
     const [menuActive, setMenuActive] = useState(false)
     const location = useLocation();
  
  useEffect(()=>{
   
    if(user){
      setIsLogged(true)
                
    }else{
      setIsLogged(false)
     
    }
  },[user])

  const handleToggleMenu = ()=>{
    setMenuActive(!menuActive)
  }


  return (
    <header className="header">
    <h2>INRH</h2>
    <nav className={`header__nav ${menuActive ? "menu_active": ""}`}>
      {location.pathname === "/"
       ? isLogged ? <button onClick={()=>logOut()}>SALIR</button>: <Link to="login">ENTRAR</Link>
       : <>
       <Link to="/">INICIO</Link>
       <Link to="/reports">REPORTES</Link>
       <Link to="/form">AGREGAR REPORTE</Link>
       {isLogged ? <button onClick={()=>logOut()}>SALIR</button>: <Link to="login">ENTRAR</Link>}
     
         </>
    }
      
      
    </nav>
    <button className="menu_btn" onClick={()=>handleToggleMenu()}><span className="material-symbols-outlined">menu</span></button>
    </header>
  );
};

export default Nav;
