import React from 'react'
import "./profilestatic.css";


//imported components
import Icon from "../Icon/Icon";



const ProfileStatic = ({statist}) => {

    return (
        <div className="profile-static-container">
            <div className="profile-static-display">
                <div className="static-icon-container">
                    <Icon statist={statist}/>
                </div>

                <div className="static-detail-container">
                    <p className="static-number">{statist.number}</p>

                    <p className="static-text">{statist.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileStatic
