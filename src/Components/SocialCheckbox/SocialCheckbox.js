import React from 'react';
import "./socialcheckbox.css";



const SocialCheckbox = ({social, task}) => {

    const data = social ? social : task;
    return (
        <div className="create-task-social-media-checkbox-display">
            <div className="social-media-checkbox-detail-display">
                <div className="social-media-checkbox-icon-container">
                    <div style={{background : `${data.color}`}} className="social-media-checkbox-icon">
                        <img src={data.image} alt=""/>
                    </div>
                </div>

                <div>
                    <p>{data.text}</p>
                </div>
            </div>

            <div className="social-media-checkbox-container">
                
                <input type="checkbox" name="" id=""/>
                <label htmlFor=""></label>
                
            </div>
        </div>
    )
}

export default SocialCheckbox
