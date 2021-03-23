import React from 'react';
import "./DropDown.css";


//imported icons
import Account from "../../Assets/images/account.svg";
import Task from "../../Assets/images/task.svg";
import LightMode from "../../Assets/images/sun.svg"
import LogOut from "../../Assets/images/logout.svg";
import DarkMode from "../../Assets/images/moon.svg";

//imported components
import CheckBox from "../../Components/CheckBox/CheckBox";

const DropDown = () => {

    
    
    return (
        <ul className="profile-dropdown">
            <li className="drop-down-li">
                <a href="/">
                    <div className="drop-down-display">
                        <div className="drop-down-icon-container">
                            <span>
                                <img src={Account} alt=""/>
                            </span>

                            <p>My profile</p>
                        </div>
                    </div>
                </a>
            </li>
            <li className="drop-down-li">
                <a href="/">
                    <div className="drop-down-display">
                        <div className="drop-down-icon-container">
                            <span>
                                <img src={Task} alt=""/>
                            </span>

                            <p>Task history</p>
                        </div>
                    </div>
                </a>
            </li>
            <li className="drop-down-li mode-li">
                <div className="mode-link">
                    <div className="drop-down-display">
                        <div className="drop-down-icon-container">
                            <span>
                                <img src={LightMode} alt="theme-icon"/>
                            </span>

                            <p>Light mode</p>
                        </div>

                        <CheckBox />
                    </div>
                </div>
            </li>
            <li className="drop-down-li">
                <a href="/">
                    <div className="drop-down-display">
                        <div className="drop-down-icon-container">
                            <span>
                                <img src={LogOut} alt=""/>
                            </span>

                            <p>Log out</p>
                        </div>
                        
                    </div>
                </a>
            </li>
        </ul>
    )
}

export default DropDown
