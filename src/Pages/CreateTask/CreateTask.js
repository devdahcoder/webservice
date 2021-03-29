import React from 'react';
import "./createtask.css";
import {v4 as uuid} from "uuid";
//imported icons
import Dribble from "../../Assets/images/dribble.svg";
import Behance from "../../Assets/images/behance.svg";
import bgLove from "../../Assets/images/bglove.svg";
import bgFollower from "../../Assets/images/bgfollowers.svg";
import bgComment from "../../Assets/images/bgcomment.svg";
import bgView from "../../Assets/images/bgviews.svg";
import Coin from "../../Assets/images/header-coin.svg";
import Lightning from "../../Assets/images/lightning.svg";

//imported components
import SocialCheckbox from "../../Components/SocialCheckbox/SocialCheckbox";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button"

const socials = [
    {
        image: Dribble,
        text: "Dribble",
        color: "#EA4C89"
    },
    {
        image: Behance,
        text: "behance",
        color: "#0057FF"
    }
]

const tasks = [
    {
        image: bgLove,
        text: "Likes",
        color: "#FFCECE"
    },
    {
        image: bgFollower,
        text: "Followers",
        color: "#F0DEFF"
    },
    {
        image: bgComment,
        text: "Comments",
        color: "#DEFFE5"
    },
    {
        image: bgView,
        text: "Views",
        color: "#FFF6DE"
    },
]



const CreateTask = () => {
    return (
        <div className="task-create-container">
            <div className="task-create-display">
                <div className="task-create-header-container">
                    <p>Task Creation</p>
                </div>

                <div className="task-create-form-container">
                    <div className="task-create-form-display">
                        <form action="" method="post">
                            <div className="select-social-media-container">
                                <div className="select-media-header">
                                    <p>Select a social network</p>
                                </div>
                                <div className="select-social-media-display">

                                    {
                                        socials.map((social) => (<SocialCheckbox key={uuid()} social={social} />))
                                    }

                                </div>
                            </div>
                            
                            <div className="select-type-task-media-container">

                                <div className="select-media-header">
                                    <p>Task type</p>
                                </div>
                                <div className="select-task-type-media-display">

                                    {
                                        tasks.map((task) => (<SocialCheckbox key={uuid()} task={task} />))
                                    }

                                </div>
                            </div>

                            <div className="project-link-container">
                                <div className="project-link-header">
                                    <p>Project link</p>
                                </div>

                                <div className="project-link-display">
                                    <label htmlFor="">For example: https://dribbble.com/shots/Example-Name</label>
                                    <input type="text" name="" id=""/>
                                </div>
                            </div>

                            <div className="execution-cost-container">
                                <div className="execution-cost-list">
                                    <div className="execution-cost-list-header">
                                        <p>Execution cost</p>
                                    </div>

                                    <div className="execution-cost-list-subheader">
                                        <p>
                                            At least 20 coins for execution (50% goes to the site commission)
                                        </p>
                                    </div>

                                    <div>
                                        <div className="execution-cost-list-button">
                                            <span><img src={Coin} alt=""/></span> 30
                                        </div>
                                    </div>
                                </div>
                                <div className="execution-cost-list">
                                    <div className="execution-cost-list-header">
                                        <p>How much do you need?</p>
                                    </div>

                                    <div className="execution-cost-list-subheader">
                                        <p>
                                            At least 10 executions, a maximum of 1000
                                        </p>
                                    </div>

                                    <div>
                                        <div className="execution-cost-list-button">
                                        <span><img src={Lightning} alt=""/></span> 500
                                        </div>
                                    </div>
                                </div>
                                <div className="execution-cost-list">
                                    <div className="execution-cost-list-header">
                                        <p>Pin my task to the top</p>
                                    </div>

                                    <div className="execution-cost-list-subheader">
                                        <p>
                                            Additional cost is charged - 500 coins
                                        </p>
                                    </div>

                                    <div>
                                        <div className="execution-cost-list-button">
                                            <input type="checkbox" name="" id=""/>
                                            <label htmlFor=""></label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="task-create-btn-container">
                                <Button children="Create task" />
                            </div>

                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTask
