import React from 'react'
import "./input.css"


const Input = ({label, type}) => {
    return (
        <div className="input-container">
            <div className="input-display">
                <label htmlFor={label}>{label}</label>
                <input type={type} name={label} id={label} />
            </div>
        </div>
    )
}

export default Input
