import React, { useContext } from 'react'
import ReportContext from '../context/ReportsContext'

const Modal = ({text}) => {
    const {setConfirmDelete, setIsModal, isModal} = useContext(ReportContext)
 
    return (
    <div className= {`modal ${isModal? "ismodal_active":""}`}>
        <div className='modal__content'>
        <p>{text}</p>
        <div>
        <button className='delete_btn' onClick={()=> setConfirmDelete(true)}>Si</button>
        <button className='dismiss_btn' onClick={()=> setIsModal(false)}>No</button>
        </div>
        </div>
    </div>
  )
}

export default Modal
