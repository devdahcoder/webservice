import React from 'react';
import "./homeitem.css";


//imported icons 
import Dot from "../../Assets/images/dot.svg"


//imported components
import ProfileImage from "../../Components/ProfileImage/ProfileImage";
import Button from "../../Components/Button/Button";

const HomeItem = ({post}) => {
    return (
        <div className="home-list-container">
            <li className="home-list-li">
                <div className="home-list-header">
                    <div className="home-list-profile-container">
                        <span>
                            <ProfileImage child={post.content} />
                        </span>

                        <div className="home-list-profile-detail">
                            <p className="home-list-profile-name">{post.name}</p>
                            <p className="home-list-profile-content">{post.content}</p>
                        </div>
                    </div>

                    <div className="home-list-menu">
                        <button>
                            <img src={Dot} alt="dot-menu"/>
                        </button>
                    </div>
                </div>

                <div className="home-list-image-container">
                    <div className="home-list-image">
                        <img src={post.image} alt={post.image}/>
                    </div>
                </div>

                <Button children={"Perform a task"}/>
            </li>
        </div>
    )
}

export default HomeItem;
