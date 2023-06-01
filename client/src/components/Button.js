import React from 'react'

const Button = (props) => {
  
   const {content, onClick} = props 
  return (
    <div>
        <button type ="button" onClick = {onClick}>{content}</button>
    </div>
  )
}

export default Button