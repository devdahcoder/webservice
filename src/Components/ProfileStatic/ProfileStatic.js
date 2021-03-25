import React from 'react'
import "./profilestatic.css";


//imported components
import Icon from "../Icon/Icon";



const ProfileStatic = ({statist}) => {
    console.log(statist)
    return (
        <div className="profile-static-container">
            <div className="profile-static-display">
                <div className="static-icon-container">
                    <Icon stat={statist}/>
                </div>

                <div className="static-detail-container">
                    <p className="static-number">{}</p>

                    <p className="static-text">{}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileStatic
