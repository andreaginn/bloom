import React from 'react'
import '../styles/ImpactModal.css'

const ImpactModal = (props) => {

    const handleClose = () => {
        props.onClose()
      }
    return (
    
        <div>
            <div className = "modal">
                <div className = "overlay" onClick = {handleClose}></div>
                    <div className = {`modal-content`}>
    
            
                    This is a modal where a form for logging impact will be placed
                 

                </div>  
            </div>
      
        </div>
        
      )
}

export default ImpactModal