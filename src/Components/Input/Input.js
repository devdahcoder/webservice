import React from 'react'
import "./input.css"


const Input = ({type}) => {
    return (
        <div className="input-container">
            <div className="input-display">
                <label htmlFor={type.type}>{type.label}</label>
                <input type={type.type} name={type.type} id={type.type} />
            </div>
        </div>
    )
}

export default Input
