import React from 'react'
import Nav from "../commons/Nav";
import { BarChart, Bar, Cell, CartesianGrid, XAxis,YAxis,Tooltip, ResponsiveContainer, Label } from 'recharts';
const Chart = () => {
        
    
  
  
     const sampleData = [
        {mes: "En", resultado:1.4},
        {mes: "Feb", resultado:7},
        {mes: "Mar", resultado:4},
        {mes: "Abr", resultado:2.4},
        {mes: "May", resultado:3.6},
        {mes: "Jun", resultado:6.3},
        {mes: "Jul", resultado:1.2},
        {mes: "Ag", resultado:8.4},
        {mes: "Sep", resultado:6.1},
        {mes: "Oct", resultado:3.4},
        {mes: "Nov", resultado:1.5},
        {mes: "Dic", resultado:9}
       ]
      
   const fillBars = (el)=>{
    
      if(el <= 2.5){
        return "green"
      }else if(el > 2.5 && el <= 5){
        return "yellow"
      }else if(el > 5 && el <= 7.5){
        return "orange"
      }else{
        return "red"
      }
    
   } 
  
   return (
    <>
    <Nav/>
    <div className='reports'>
     
     <div className='chart-container'>
      <h2>Valores de ISH</h2>
     <ResponsiveContainer width="100%" height="80%">
     <BarChart
          data={sampleData}
          margin={{
            top: 5,
            right: 10,
            left: 20,
            bottom: 30,
          }}
          barSize={15}
        >
          <XAxis dataKey="mes" stroke='#c2dbec' scale="point" padding={{ left: 10, right: 10 }}>
          <Label value="Mes" fill='#c2dbec' position="bottom"/>
          </XAxis>
          <YAxis dataKey="resultado" stroke='#c2dbec' values=''>
            <Label value="ISH" fill='#c2dbec' position="insideLeft"/>
          </YAxis> 
          <Tooltip contentStyle={{backgroundColor:'#c2dbec', color:'#1c2548', width: 150, border:'none'}} />
          <CartesianGrid strokeDasharray="1 1" />
          <Bar dataKey="resultado" background={{ fill: '#c2dbec' }}>
          {sampleData.map((el, index)=>
                <Cell key={`cell-${index}`} fill={fillBars(el.resultado)}/>
          )}
          </Bar>
        </BarChart>
  </ResponsiveContainer>
     </div>
    </div>
    </>
    
  )
}

export default Chart;