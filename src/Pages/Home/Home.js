import React from 'react'
import "./home.css"

//imported icons 
import Plus from "../../Assets/images/plus.svg";

//imported components
import HomeDisplay from "../../Components/HomeDisplay/HomeDisplay";

//imported libraries
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <section className="home-container">
            <div className="home-display">
                <div className="home-header">
                    <div className="home-header-text">
                        <p>Task List</p>
                    </div>
                    <div className="home-header-btn-container">
                        <Link to="create-task">
                            <button>
                                <span><img style={{verticalAlign: "middle", marginRight: "0.3em"}} src={Plus} alt=""/></span> Create task
                            </button>
                        </Link>
                    </div>
                </div>

                <HomeDisplay />


            </div>
        </section>
    )
}

export default Home;
