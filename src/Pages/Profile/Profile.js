import React from 'react';
import "./profile.css";

//imported components
import ProfileStaticDisplay from "../../Components/ProfileStaticDisplay/ProfileStaticDisplay";
import FormDisplay from "../../Components/FormDisplay/FormDisplay";


//imported icons 
import Plus from "../../Assets/images/plus.svg";
import Dot from "../../Assets/images/dot.svg";
import Facebook from "../../Assets/images/facebook.svg"
import Twitter from "../../Assets/images/twitter.svg"
import Vikonet from "../../Assets/images/vkonet.svg"

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
                            <div className="profile-file-image-container">
                                <div className="profile-file-image-display">
                                    <img className="profile-file-image" src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                </div>
                            </div>

                            <div className="profile-file-btn-container">
                                {/* <input type="file" name="" id=""/> */}
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
                                <div className="social-list">
                                    <div className="social-list-image-container">
                                        <div style={{marginRight: "10px"}}>
                                            <img src={Facebook} alt=""/>
                                        </div>
                                        <div>
                                            <p>FaceBook</p>
                                        </div>
                                    </div>

                                    <div className="social-list-btn-container">
                                        <div>
                                            <button className="social-add-btn">
                                                <img src={Plus} alt=""/>
                                            </button>
                                        </div>
                                        {/* <div>
                                            <button>
                                                <img src={Dot} alt=""/>
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="social-list">
                                    <div className="social-list-image-container">
                                        <div style={{marginRight: "10px"}}>
                                            <img src={Twitter} alt=""/>
                                        </div>
                                        <div>
                                            <p>Twitter</p>
                                        </div>
                                    </div>

                                    <div className="social-list-btn-container">
                                        <div>
                                            <button className="social-add-btn">
                                                <img src={Plus} alt=""/>
                                            </button>
                                        </div>
                                        {/* <div>
                                            <button>
                                                <img src={Dot} alt=""/>
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="social-list">
                                    <div className="social-list-image-container">
                                        <div style={{marginRight: "10px"}}>
                                            <img src={Vikonet} alt=""/>
                                        </div>
                                        <div>
                                            <p>VKontakte</p>
                                        </div>
                                    </div>

                                    <div className="social-list-btn-container">
                                        <div>
                                            <button className="social-add-btn">
                                                <img src={Plus} alt=""/>
                                            </button>
                                        </div>
                                        {/* <div>
                                            <button>
                                                <img src={Dot} alt=""/>
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <FormDisplay />
                </div>

                <div>
                    <ProfileStaticDisplay />
                </div>
            </div>
        </section>
    )
}

export default Profile
