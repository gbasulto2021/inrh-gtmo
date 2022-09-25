import React, {useState, useEffect}  from 'react';
import Nav from "../commons/Nav";
import Report from './Report';
import { useNavigate} from "react-router-dom";
// import AuthContext from "../context/AuthContext";

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [reports, setReports] =useState([])
 const navigate = useNavigate();
 


  useEffect(()=>{
    const loggedUserJson =window.localStorage.getItem("user");
    if(loggedUserJson){
      const user = JSON.parse(loggedUserJson)
      setUser(user)
            
    }else{
      navigate('/login')
    }
  },[])

    useEffect(()=>{
      const getReports = async()=>{

        try {
          const response = await fetch("http://localhost:5500/reports");
          if (!response.ok){
            throw new Error({status: response.status, statusText: response.statusText})
          }
          const data = await response.json()
          setReports(data)
        } catch (error) {
          console.log(error);
        }
      }

      getReports()
    },[])
  
  return (
<>
<Nav/>
<div className='dashboard'>
  
  <div className='reports_list'>
      <div className='reports__labels'>
       <p>Año</p>
       <p>Mes</p>
       <p>Municipio</p>
       <p>ISH</p>  
      </div> 
     {reports && reports.length > 0
      ? reports.map(report=> <Report key={report.id_factores} data={report}/>)
      : <p>"No hay Reportes"</p>}
     
  </div>
     
    
</div>
</>
    
  )
}

export default Dashboard