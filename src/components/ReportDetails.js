import React, { useContext, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../commons/Nav";
import ReportContext from "../context/ReportsContext";

const ReportDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const { findOneReport, report } = useContext(ReportContext);
  const {
    factor_climatico,
    factor_geologico,
    nivel_cauce,
    nivel_aguaSubterranea,
    volumen,
    cobertura_forestal,
    demanda,
    municipio,
    mes,
    year,
    resultado,
  } = report;

  useEffect(() => {
    findOneReport(id);
  }, []);


  const closeReport = ()=>{
    navigate("/reports")
  }
  return (
    <>
      <Nav />
      <div className="report">
        <div className="report__details">
          <p><small>Año:</small> {year}</p>
          <p><small>Mes:</small> {mes}</p>
          <p><small>Municipio:</small> {municipio}</p>
          <p><small>Factor Climatico:</small> {factor_climatico}</p>
          <p><small>Factor Geologico:</small> {factor_geologico}</p>
          <p><small>Nivel Cauce:</small> {nivel_cauce}</p>
          <p><small>Nivel de Agua:</small> {nivel_aguaSubterranea}</p>
          <p><small>Volumen:</small> {volumen}</p>
          <p><small>Cobertura Forestal:</small> {cobertura_forestal}</p>
          <p><small>Demanda:</small> {demanda}</p>
          <p><small>ISH:</small> {resultado}</p>
          <span onClick={()=> closeReport()}><span className="material-symbols-outlined">close</span></span>
        </div>
      </div>
    </>
  );
};

export default ReportDetails;
