import React from 'react';
import "./mobilemenu.css";


//imported library
import { Link } from "react-router-dom";

//imported icons...//
import Task from "../../Assets/images/task.svg";
import News from "../../Assets/images/news.svg";
import Faq from "../../Assets/images/faq.svg";
import Menu from "../../Assets/images/menu.svg"


const MobileMenu = ({onClickDrop}) => {
    return (
        <div className="mobile-menu-container">
            <nav className="mobile-menu-nav">
                <ul className="mobile-menu-ul">
                    <li className="mobile-menu-li">
                        <Link to="/">
                            <div className="mobile-menu-display">
                                <span>
                                    <img src={Task} alt="task"/>
                                </span>

                                <p>Task List</p>
                            </div>
                        </Link>
                    </li>
                    <li className="mobile-menu-li">
                        <Link to="news">
                            <div className="mobile-menu-display">
                                <span>
                                    <img src={News} alt="news"/>
                                </span>

                                <p>News</p>
                            </div>
                        </Link>
                    </li>
                    <li className="mobile-menu-li">
                        <Link to="faq">
                            <div className="mobile-menu-display">
                                <span>
                                    <img src={Faq} alt="faq"/>
                                </span>

                                <p>Faq</p>
                            </div>
                        </Link>
                    </li>
                    <li className="mobile-menu-li">
                        <div className="drop-link" onClick={onClickDrop}>
                            <div className="mobile-menu-display">
                                <span>
                                    <img src={Menu} alt="menu"/>
                                </span>

                                <p>Menu</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileMenu
