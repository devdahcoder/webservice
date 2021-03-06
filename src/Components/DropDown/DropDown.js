import React from 'react';
import "./DropDown.css";


//imported library
import { Link } from "react-router-dom";

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
            <div className="drop-down-header">
                <p>
                    Menu
                </p>
            </div>
            <li className="drop-down-li">
                <Link to="/profile">
                    <div className="drop-down-display">
                        <div className="drop-down-icon-container">
                            <span>
                                <img src={Account} alt=""/>
                            </span>

                            <p>My profile</p>
                        </div>
                    </div>
                </Link>
            </li>
            <li className="drop-down-li">
                <Link to="/">
                    <div className="drop-down-display">
                        <div className="drop-down-icon-container">
                            <span>
                                <img src={Task} alt=""/>
                            </span>

                            <p>Task history</p>
                        </div>
                    </div>
                </Link>
            </li>
            <li className="drop-down-li mode-li">
                <div className="mode-link">
                    <div className="drop-down-display">
                        <div className="drop-down-icon-container">
                            <span>
                                <img src={DarkMode} alt="theme-icon"/>
                            </span>

                            <p>Light mode</p>
                        </div>

                        <CheckBox />
                    </div>
                </div>
            </li>
            <li className="drop-down-li">
                <Link to="/">
                    <div className="drop-down-display">
                        <div className="drop-down-icon-container">
                            <span>
                                <img src={LogOut} alt=""/>
                            </span>

                            <p>Log out</p>
                        </div>
                        
                    </div>
                </Link>
            </li>
            <div className="drop-down-footer">
                <p>?? 2020 - All Rights Licensed</p>
            </div>
        </ul>
    )
}

export default DropDown
