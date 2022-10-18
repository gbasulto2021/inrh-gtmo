import React, { useContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import ReportContext from "../context/ReportsContext";


const ReportTableRow = ({ data}) => {
  const { id_factores, municipio, mes, year, resultado } = data;
  const navigate = useNavigate();
  const { setDataToEdit, setIsModal, setIdToDelete } = useContext(
    ReportContext
  );
  const [rol,setRol] =useState(null)
  useEffect(()=>{
    setRol(JSON.parse(localStorage.getItem("user")).rol)
  },[])
    
  const reportDetails = (id) => {
    navigate(`/report/${id}`);
  };

  const handleUpdate = (id) => {
    setDataToEdit(data);
    navigate(`/update/${id}`);
  };

  const handleDelete = (id) => {
    setIsModal(true);
    setIdToDelete(id);
  };

  return (
    <tr>
      <td>{year}</td>
      <td>{mes}</td>
      <td>{municipio}</td>
      <td>{resultado}</td>
      <td className="row-btns">
     <button
          className="report_btn"
          onClick={() => reportDetails(id_factores)}
          title="Ver Reporte"
        >
          <span className="material-symbols-outlined">Preview</span>
        </button>
        { (rol==="administrador" || rol ==="especialista")&& <button
          className="report_btn"
          onClick={() => handleUpdate(id_factores)}
          title="Editar Reporte"
        >
          <span className="material-symbols-outlined">Edit</span>
        </button>}
        {rol === "administrador" &&<button
          className="report_btn"
          onClick={() => handleDelete(id_factores)}
          title="Eliminar Reporte"
        >
          <span className="material-symbols-outlined">Delete</span>
        </button>}
      </td>
    </tr>
  );
};

export default ReportTableRow;
