import React, { useEffect, useState } from 'react'
import Nav from "../commons/Nav";
import { useSearchParams } from 'react-router-dom';
import BarChartComponent from './BarChartComponent';
import Loader from "./Loader";
const Chart = () => {
      const [query] = useSearchParams();
      let year = query.get("year");
      let municipio = query.get("municipio");
      const [report, setReport] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      
      
       useEffect(() => {
        const getReport = async () => {
          try {
            setIsLoading(true)
            const response = await fetch(
              `http://localhost:5500/report?year=${year}&municipio=${municipio}`
            );
    
            if (!response.ok) {
              throw new Error({
                status: response.status,
                statusText: response.statusText,
              });
            }
            const data = await response.json();
            setReport(data);
            setIsLoading(false)
          } catch (error) {
            console.log(error);
          }
        };
    
        getReport();
       }, [])
       
   return (
    <>
    <Nav/>
    <div className='reports'>
     
     <div className='chart-container'>
      {isLoading && <Loader/>}
      <div className='chart__info'>
        <p>Año: <b>{year}</b></p>
        <p>Municipio:  <b>{municipio}</b></p>
      </div>
      <h2>Valores de ISH</h2>
      <BarChartComponent data={report}/>
      
     </div>
    </div>
    </>
    
  )
}

export default Chart;