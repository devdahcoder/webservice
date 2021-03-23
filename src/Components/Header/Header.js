import React from 'react';
import "./header.css";

//imported icons...//
import Coin from "../../Assets/images/header-coin.svg"
import Logo from "../../Assets/images/logo.png";
import Plus from "../../Assets/images/plus.svg";
import Task from "../../Assets/images/task.svg";
import News from "../../Assets/images/news.svg";
import Help from "../../Assets/images/help.svg";
import DownArrow from "../../Assets/images/down-arrow.svg"


//imported components...//
import ProfileImage from "../ProfileImage/ProfileImage"


const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <a href="/">
                        <img className="logo" src={Logo} alt="website logo"/>
                    </a>
                </div>
                <nav className="header-nav">
                    <ul className="header-ul">
                        <li>
                            <a href="/">
                                <div className="header-link-display">
                                    <span>
                                        <img src={Task} alt="task-link-logo"/>

                                    </span>

                                    <p>Task list</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className="header-link-display">
                                    <span>
                                        <img src={News} alt="news-link-logo"/>

                                    </span>

                                    <p>News</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className="header-link-display">
                                    <span>
                                        <img src={Help} alt="help-link-logo"/>
                                    </span>

                                    <p>Help</p>

                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="date-profile-container">
                    <div className="header-date-container">
                        <button className="plus-btn">
                            <img src={Plus} alt=""/>

                        </button>

                        <div className="date-container">
                            <span>
                                <img src={Coin} alt="header-coin-logo"/>

                            </span>

                            <p>2023</p>
                        </div>

                        
                    </div>

                    <div className="header-profile-container">
                        <div className="profile-container-display">
                            <span>
                                <ProfileImage />
                            </span>

                            <div>
                                <button className="drop-down">
                                    <img src={DownArrow} alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
