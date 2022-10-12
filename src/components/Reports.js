import React, {useState, useEffect, useContext}  from 'react';
import Nav from "../commons/Nav";
import Report from './Report';
import { useNavigate} from "react-router-dom";
import {years} from "../herpers/years";
import ReportContext from '../context/ReportsContext';
import Modal from './Modal';

const Reports = () => {
  // const [reports, setReports] =useState([])
  const [year, setYear] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [error, setError] = useState("");
  const {reports, getReports, message} = useContext(ReportContext)
  const navigate = useNavigate();
  

    useEffect(()=>{
     
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
<Modal text="Confirme si desea eliminar el reporte"/>
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
  <p className='message'>{message}</p>
 
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

export default Reports