
import React, { useState } from "react";
import Button from "../commons/Button";
import Nav from "../commons/Nav";
import Loader from "./Loader";
import { useNavigate} from "react-router-dom";
import {years} from "../herpers/years";

const initialState = {
  mes: "",
  municipio: "",
  year: "",
  fecha: "",
  factorClimatico: "",
  factorGeologico: "",
  nivelCauce: "",
  nivelAguaSubTerranea: "",
  volumen: "",
  coberturaForestal: "",
  demanda: "",
  resultado: "",
  idUser: "",
};

// =('Factor B4climatico'!N2*0.16)+('Factor geológico'!N2*0.13)+('Nivel del cauce'!N2*0.13)+('Nivel Aguas Subterráneas'!N2*0.15)+('Volumen de los embalses'!N2*0.17)+('Cobertura forestal'!N2*0.12)+('Demanda disponibilidad'!N2*0.14)
const Form = () => {
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  // const years = (cb) => {
  //   return cb();
  // };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addReport = async (data) => {
    try {
      let url = "http://localhost:5500/new-report";
      let options = {
        method:"POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
      };
      setIsLoading(true);
      const response = await fetch(url,options)
      const json = await response.json()
      setIsLoading(false)
          
      return json  
    } catch (error) {
      console.log(error);
    }
  };

  const calcResult = (data) => {
    let result;
    const {
      demanda,
      factorClimatico,
      factorGeologico,
      nivelAguaSubTerranea,
      nivelCauce,
      volumen,
      coberturaForestal,
    } = data;
    result =
      factorClimatico * 0.16 +
      factorGeologico * 0.13 +
      nivelCauce * 0.13 +
      nivelAguaSubTerranea * 0.15 +
      volumen * 0.17 +
      coberturaForestal * 0.12 +
      demanda * 0.14;
    return result;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addReport({
      ...form,
      resultado: calcResult(form),
      idUser: JSON.parse(localStorage.getItem("user")).id_user
    }).then(res=> {
      if(res.ok){
        setMessage(res.statusText)
        setForm(initialState);
        navigate('/dashboard')
      }else{
        setErrors(res.errors)
      }
      
    })
    
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  const isError = (param)=>{
    if(errors){
      return errors.some(error=> error.param == param)
    }
  }

 

  return (
    <>
      <Nav />
      <div className="form">
        <form className="form__data" onSubmit={handleSubmit}>
          <div className="form__data-first-group">
            
            <div className="form__data-item">
              <label htmlFor="year">Año</label>
              <select
                id="year"
                name="year"
                value={form.year}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Escoja..</option>
                {years()}
                {/* {years && years.length > 0 ? years.map((el, index)=> <option key={index} value={el}>{el}</option>): <option value="2022">2022</option> } */}
              </select>
              <span className={`form-text-error ${isError("year")?"is-error-active": ""}`}>Debe escojer un valor</span>
            </div>
          </div>
          <div className="form__data-second-group">
          <div className="form__data-item-2">
              <label htmlFor="mes">Mes</label>

              <select
                id="mes"
                name="mes"
                value={form.mes}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Escoja..</option>
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
                <option value="Abril">Abril</option>
                <option value="Mayo">Mayo</option>
                <option value="Junio">Junio</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
              </select>
              <span className={`form-text-error ${isError("mes")?"is-error-active": ""}`}>Debe escojer un valor</span>
            </div>
            <div className="form__data-item-2">
              <label htmlFor="municipio">Municipio</label>
              <select
                id="municipio"
                name="municipio"
                value={form.municipio}
                onChange={(e) => handleChange(e)}
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
              <span className={`form-text-error ${isError("municipio")?"is-error-active": ""}`}>Debe escojer un valor</span>
            </div>
            <div className="form__data-item-2">
              <label htmlFor="factorClimatico">Factor Climatico</label>
              <select
                id="factorClimatico"
                name="factorClimatico"
                value={form.factorClimatico}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Escoja..</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
              <span className={`form-text-error ${isError("factorClimatico")?"is-error-active": ""}`}>Debe escojer un valor</span>
            </div>
            <div className="form__data-item-2">
              <label htmlFor="factorGeologico">Factor Geologico</label>
              <select
                id="factorGeologico"
                name="factorGeologico"
                value={form.factorGeologico}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Escoja..</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
              <span className={`form-text-error ${isError("factorGeologico")?"is-error-active": ""}`}>Debe escojer un valor</span>
            </div>
            <div className="form__data-item-2">
              <label htmlFor="nivelCauce">Nivel del cauce</label>
              <select
                id="nivelCauce"
                name="nivelCauce"
                value={form.nivelCauce}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Escoja..</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
              <span className={`form-text-error ${isError("nivelCauce")?"is-error-active": ""}`}>Debe escojer un valor</span>
            </div>
            <div className="form__data-item-2">
              <label htmlFor="nivelAguaSubTerranea">Nivel de Agua</label>
              <select
                id="nivelAguaSubTerranea"
                name="nivelAguaSubTerranea"
                value={form.nivelAguaSubTerranea}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Escoja</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
              <span className={`form-text-error ${isError("nivelAguaSubTerranea")?"is-error-active": ""}`}>Debe escojer un valor</span>
            </div>
            <div className="form__data-item-2">
              <label htmlFor="volumen">Volumen</label>
              <select
                id="volumen"
                name="volumen"
                onChange={(e) => handleChange(e)}
                value={form.volumen}
              >
                <option value="">Escoja..</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
              <span className={`form-text-error ${isError("volumen")?"is-error-active": ""}`}>Debe escojer un valor</span>
            </div>
            <div className="form__data-item-2">
              <label htmlFor="coberturaForestal">Cobertura Forestal </label>
              <select
                id="coberturaForestal"
                name="coberturaForestal"
                onChange={(e) => handleChange(e)}
                value={form.coberturaForestal}
              >
                <option value="">Escoja..</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
              <span className={`form-text-error ${isError("coberturaForestal")?"is-error-active": ""}`}>Debe escojer un valor</span>
            </div>
            <div className="form__data-item-2">
              <label htmlFor="demanda">Demanda </label>
              <select
                id="demanda"
                name="demanda"
                onChange={(e) => handleChange(e)}
                value={form.demanda}
              >
                <option value="">Escoja..</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
              <span className={`form-text-error ${isError("demanda")?"is-error-active": ""}`}>Debe escojer un valor</span>
            </div>
            <div className="form__data-item-2 form-btn">
            <Button text="Guardar" />
            </div>
          </div>
          
        </form>
        {isLoading && <Loader />}
        {message && <p className="message">{message}</p>}
      </div>
    </>
  );
};

export default Form;
