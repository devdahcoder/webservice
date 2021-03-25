import React from 'react';
import "./profile.css";

//imported components
import Input from "../../Components/Input/Input";
import ProfileStatic from "../../Components/ProfileStatic/ProfileStatic";


//imported icons 
import Plus from "../../Assets/images/plus.svg";
import Dot from "../../Assets/images/dot.svg";

const Profile = () => {
    return (
        <section className="profile-container">
            <div className="profile-header-text">
                <p>Profile</p>
            </div>
            <div className="profile-display">
                <div className="profile-file-container">
                    <div className="profile-file-display">
                        <div className="profile-file">
                            <div>
                                <div>
                                    <img src="" alt=""/>
                                </div>
                            </div>

                            <div>
                                <button>
                                    <span><img style={{verticalAlign: "middle", marginRight: "0.3em"}} src={Plus} alt=""/></span> Upload new Photo
                                </button>
                            </div>
                        </div>

                        <div className="social-container">
                            <div className="social-header">
                                <p>Social</p>
                            </div>

                            <div className="social-display">
                                <div>
                                    <div>
                                        <div>
                                            <img src="" alt=""/>
                                        </div>
                                        <div>
                                            <p>FaceBook</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <button>
                                                <img src={Plus} alt=""/>
                                            </button>
                                        </div>
                                        <div>
                                            <button>
                                                <img src={Dot} alt=""/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    hello world
                    <Input label={"Dele"} type={"text"} />
                </div>

                <div>
                    <ProfileStatic />
                </div>
            </div>
        </section>
    )
}

export default Profile
