import React, {useState} from 'react';
import "./profilestaticdisplay.css";


//imported libraries
import {v4 as uuid} from "uuid";


//imported icons
import Love from "../../Assets/images/like.svg";
import Dollar from "../../Assets/images/dollar.svg";
import Date from "../../Assets/images/date.svg";
import Follow from "../../Assets/images/followers.svg";


//import components
import ProfileStatic from "../ProfileStatic/ProfileStatic"

const initialState = [
    {
        icon: Love,
        number: "2, 432",
        description: "Likes delivered for all times",
        color: "#FFCECE"
        
    },
    {
        icon: Follow,
        number: "15",
        description: "New users invited",
        color: "#F1DEFF"
        
    },
    {
        icon: Date,
        number: "329",
        description: "Days since registration",
        color: "#DEFFE5"
        
    },
    {
        icon: Dollar,
        number: "$ 123,344",
        description: "Real money spent",
        color: "#FFF6DE"
        
    },

]

const ProfileStaticDisplay = () => {
    const [statists, setStatist] = useState(initialState);

    console.log(statists);
    
    return (
        <div className="statics-container">
            <div className="statics-header">
                <p>Personal Statistic</p>
            </div>
            <div className="statics-display">
                {
                    statists.map((statist) => (
                        <ProfileStatic key={uuid()} statist={statist} />
                    ))
                }
            </div>

        </div>
    )
}

export default ProfileStaticDisplay
