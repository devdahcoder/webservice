import React from 'react';
import "./icon.css";


const Icon = ({statist}) => {
    return (
        <div className="custom-icon-container">
            <div style={{background: statist}} className="icon-display">
                <img src={statist} alt=""/>
            </div>
        </div>
    )
}

export default Icon;
