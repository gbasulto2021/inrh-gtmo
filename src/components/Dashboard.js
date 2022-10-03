import React, {useState, useEffect}  from 'react';
import Nav from "../commons/Nav";
import Report from './Report';
import { useNavigate} from "react-router-dom";
import {years} from "../herpers/years";


const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [reports, setReports] =useState([])

  const [year, setYear] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
   console.log(reports);

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

    
const handleYearSubmit = (e)=>{
 e.preventDefault();
 if(!year || !municipio){
   setError("Debe seleccionar año y municipio a consultar")

 }else{
   
    navigate(`/report?year=${year}&municipio=${municipio}`)
 }
}
  


  return (
<>
<Nav/>
<div className='dashboard'>
  <div className='dashboard__header'>
    <form onSubmit={handleYearSubmit} className="dashboard__form">
    <div className='dashboard__form-item'>
      <label htmlFor="municipio">Municipio</label>
    <select
                id="municipio"
                name="municipio"
                value={municipio}
                onChange={(e) => setMunicipio(e.target.value)}
              >
                <option value="">Escoja..</option>
                <option value="mias">Imias</option>
                <option value="Baracoa">Baracoa</option>
                <option value="San Antonio del Sur">San Antonio del Sur</option>
                <option value="Manuel Tames">Manuel Tames</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Maisi">Maisi</option>
                <option value="Niceto Perez">Niceto Perez</option>
                <option value="Yateras">Yateras</option>
                <option value="Guantanamo">Guantanamo</option>
                <option value="Caimanera">Caimanera</option>
    </select>
    </div>
    <div className="dashboard__form-item">
              <label htmlFor="year">Año</label>
              <select
                id="year"
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Escoja..</option>
                {years()}
                {/* {years && years.length > 0 ? years.map((el, index)=> <option key={index} value={el}>{el}</option>): <option value="2022">2022</option> } */}
              </select>
              
    </div>
    <button className='btn'>Ver grafica</button>
   </form>
    <span className={`dashboard__form-error ${error ? "is-error-active": ""}`}>{error}</span>
  </div>
  <div className='reports__list'>
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