import React,{useContext} from 'react'
import ReportContext from '../context/ReportsContext'
import ReportTableRow from './ReportTableRow'

const ReportsTable = () => {
    const {reports} = useContext(ReportContext)

  return (
    
        <table className='reports__table'>
            <thead>
                <tr>
                    <th>Año</th>
                    <th>Mes</th>
                    <th>Municipio</th>
                    <th>ISH</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {reports.length > 0 ? (
            reports.map((report) => <ReportTableRow key={report.id_factores} data={report} />)
          ) : (
            <tr>
              <td colSpan="4">No hay Reportes</td>
            </tr>
          )}
            </tbody>
        </table>
    
  )
}

export default ReportsTable