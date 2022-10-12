import React, { createContext, useState} from "react";

const initialUser = JSON.parse(localStorage.getItem("user")) || null

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState(initialUser)

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
      
         if(!response.ok){
            throw new Error({status: response.status, statusText: response.statusText})
         }
        const res = await response.json()
        setMessage(res.statusText);
        setIsLoading(false);
        
        if(res.ok ===true){
          localStorage.setItem("user", JSON.stringify(res.data))
          setUser(localStorage.getItem("user"))
          setTimeout(()=>{
            setIsLoading(false);
            setMessage(null)
          },2000)
       }
   
  } catch (error) {
    console.log(error)
  }
    
   
    }
 
  const logOut =()=>{
      localStorage.removeItem("user")
      setUser(null)
     }
  const data = {
    user,
    loginUser,
    logOut,
    isLoading,
    message,
    setMessage
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };

export default AuthContext;
