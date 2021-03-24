import React from 'react'
import "./button.css"


const Button = ({children}) => {
    return (
        <div className="home-list-button-container">
            <button>
                {children}
            </button>
        </div>
    )
}

export default Button
