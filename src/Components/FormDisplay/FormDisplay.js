import React, {useState} from 'react';
import "./formdisplay.css";


//imported libraries
import {v4 as uuid} from "uuid";

//imported components
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button"


const initialState = [
    {
        label: "Dribble link",
        type: "url"

    },
    {
        label: "Behance link",
        type: "url"

    },
    {
        label: "Email",
        type: "email"

    },
    {
        label: "Primary password",
        type: "password"

    },
    {
        label: "New password",
        type: "password"

    },
    {
        label: "Confirm password",
        type: "password"

    },
]

const FormDisplay = () => {

    const [types, setTypes] = useState(initialState);



    return (
        <div className="profile-form-container">
            <form action="" method="post">
                {
                    types.map((type) => (<Input key={uuid()} type={type} />))
                }

                <div className="profile-form-btn">
                    <Button children="Save changes" />
                </div>
            </form>
        </div>
    )
}

export default FormDisplay
