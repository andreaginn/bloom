import React from 'react'
import '../styles/Button.css'

const Button = (props) => {
  
   const {content, onClick} = props 
  return (
    <div>
        <button className = "impactButton" type ="button" onClick = {onClick}>{content}</button>
    </div>
  )
}

export default Button