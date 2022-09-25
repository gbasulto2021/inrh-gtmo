import React, { createContext, useState } from "react";
// import { helpHttp } from "../herpers/helpHttp";
// import { useNavigate} from "react-router-dom";
const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState(null)
  // const navigate = useNavigate();
 
    
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
      const userJson = window.localStorage.getItem("user");
      setUser(JSON.parse(userJson))
      setIsLoading(false);
      setMessage(res.statusText);
      setTimeout(()=>{
        setMessage(null)
      },2000)
      
    } catch (error) {
      console.log(error)
    }
      
     
      }

  
    

  const data = {
    user,
    loginUser,
    isLoading,
    message,
    setMessage
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };

export default AuthContext;
