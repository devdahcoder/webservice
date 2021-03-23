import React from 'react'
import "./mobilemenu.css"

//imported icons...//
import Task from "../../Assets/images/task.svg";
import News from "../../Assets/images/news.svg";
import Faq from "../../Assets/images/faq.svg";
import Menu from "../../Assets/images/menu.svg"


const MobileMenu = () => {
    return (
        <div className="mobile-menu-container">
            <nav className="mobile-menu-nav">
                <ul className="mobile-menu-ul">
                    <li className="mobile-menu-li">
                        <a href="/">
                            <div className="mobile-menu-display">
                                <span>
                                    <img src={Task} alt="task"/>
                                </span>

                                <p>Task List</p>
                            </div>
                        </a>
                    </li>
                    <li className="mobile-menu-li">
                        <a href="/">
                            <div className="mobile-menu-display">
                                <span>
                                    <img src={News} alt="news"/>
                                </span>

                                <p>News</p>
                            </div>
                        </a>
                    </li>
                    <li className="mobile-menu-li">
                        <a href="/">
                            <div className="mobile-menu-display">
                                <span>
                                    <img src={Faq} alt="faq"/>
                                </span>

                                <p>Faq</p>
                            </div>
                        </a>
                    </li>
                    <li className="mobile-menu-li">
                        <a href="/">
                            <div className="mobile-menu-display">
                                <span>
                                    <img src={Menu} alt="menu"/>
                                </span>

                                <p>Menu</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileMenu
