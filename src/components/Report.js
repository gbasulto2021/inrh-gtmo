import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import ReportContext from '../context/ReportsContext';



const Report = ({data}) => {
    const {id_factores,municipio,mes,year,resultado} =data;
    const navigate = useNavigate()
    const {setDataToEdit, setIsModal,setIdToDelete} = useContext(ReportContext)

    
   
    const reportDetails = (id)=>{
       navigate(`/report/${id}`)
    }
   
    const handleUpdate = (id)=>{
      setDataToEdit(data)
      navigate(`/update/${id}`)
    }

    const handleDelete =(id)=>{
      setIsModal(true)
      setIdToDelete(id)
      
    }

  return (
    <div className='dashboard__report'>
       <p>{year}</p>
       <p>{mes}</p>
       <p>{municipio}</p>
       <p>{resultado}</p>
       <button className='report_btn' onClick={()=> reportDetails(id_factores)} title="Ver Reporte"><span className="material-symbols-outlined">Preview</span></button>
       <button className='report_btn' onClick={()=> handleUpdate(id_factores)} title="Editar Reporte"><span className="material-symbols-outlined">Edit</span></button>
       <button className='report_btn' onClick={()=> handleDelete(id_factores)} title="Eliminar Reporte" ><span className="material-symbols-outlined">Delete</span></button>
       
    </div>
  )
}

export default Report