import React,{ createContext, useState,useEffect } from "react";

const ReportContext = createContext()


const ReportsProvider = ({children})=>{
const [reports, setReports] = useState([])
const [report, setReport] = useState({})
const [dataToEdit, setDataToEdit] = useState(null)
const [isLoading, setIsLoading] = useState(false);
const [message, setMessage] = useState(null);
const [confirmDelete, setConfirmDelete] = useState(false)
const [isModal,setIsModal] = useState(false)
const [idToDelete,setIdToDelete] = useState(null)
// const [errors, setErrors] = useState(null);
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

const findOneReport = async(id)=>{
    try {
        const response = await fetch(`http://localhost:5500/report/${id}`);
       
        if (!response.ok){
          throw new Error({status: response.status, statusText: response.statusText})
        }
        const res = await response.json()
       
        setReport(res.data)

      } catch (error) {
        console.log(error);
      }
   
}

const updateReport = async(data)=>{
    try {
        let url = `http://localhost:5500/update/${dataToEdit.id_factores}`;
        let options = {
          method:"PUT",
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
}



const deleteReport = async(id)=>{
    
        try {
            let url = `http://localhost:5500/delete/${id}`;
            let options = {
              method:"DELETE",
            };
            setIsLoading(true);
            const response = await fetch(url,options)
            if (!response.ok){
                throw new Error({status: response.status, statusText: response.statusText})
              }
            const json = await response.json()
            setIsLoading(false)
            setIsModal(false)
            setIdToDelete(null)
            setConfirmDelete(false) 
            setMessage(json.statusText)
            const newData = reports.filter(report=> report.id_factores !== id) 
            setReports(newData)
            setTimeout(() => {
                setMessage(null);
                
                }, 2000);
                      
          } catch (error) {
            console.log(error);
          }
    
}

  useEffect(() => {
   if(confirmDelete){
    deleteReport(idToDelete)
   }
  }, [confirmDelete])

  const data = {
    setIdToDelete,
    isModal,
    setIsModal,
    setConfirmDelete,
    message,
    isLoading,
    addReport,
    setDataToEdit,
    dataToEdit,
    updateReport,
    reports,
    report,
    getReports,
    findOneReport,
   
  }

return <ReportContext.Provider value={data}>{children}</ReportContext.Provider>
}


export default ReportContext;
export {ReportsProvider};