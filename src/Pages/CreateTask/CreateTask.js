import React from 'react';
import "./createtask.css";

//imported icons
import Dribble from "../../Assets/images/dribble.svg"



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
                            <div className="select-social-media-display">
                                <div className="social-media-checkbox-display">
                                    <div className="social-media-checkbox-detail-display">
                                        <div className="social-media-checkbox-icon-container">
                                            <div className="social-media-checkbox-icon">
                                                <img src={Dribble} alt=""/>
                                            </div>
                                        </div>

                                        <div>
                                            <p>Dribble</p>
                                        </div>
                                    </div>

                                    <div className="social-media-checkbox-container">
                                        
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor=""></label>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTask
