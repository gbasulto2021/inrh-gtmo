import React from 'react'

const Report = ({data}) => {
    const {fecha,municipio,mes,year,resultado} =data;



    
  return (
    <div className='dashboard__report'>
       <p>{year}</p>
       <p>{mes}</p>
       <p>{municipio}</p>
       <p>{resultado}</p>
       <button className='report_btn'><span className="material-symbols-outlined">Preview</span></button>
       <button className='report_btn'><span className="material-symbols-outlined">Edit</span></button>
       <button className='report_btn'><span className="material-symbols-outlined">Delete</span></button>
       
    </div>
  )
}

export default Report