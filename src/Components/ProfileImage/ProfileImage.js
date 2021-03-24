import React from "react";
import "./profileimage.css"

//imported icons
import Like from "../../Assets/images/like.svg"
import Comment from "../../Assets/images/comment.svg"
import View from "../../Assets/images/views.svg"
import Follow from "../../Assets/images/followers.svg"


const iconRender = (icon) => {
    switch (icon) {
        case "like":
            return Like;
            break;
    
        case "comment":
            return Comment;
            break;
    
        case "view":
            return View;
            break;
    
        case "followers":
            return Follow;
            break;
    
        default:
            break;
    }
}

const ProfileImage = ({child}) => {
    return (
        <div className="profile-image-container">
            <span className="profile-image-span">
                
                <img className="profile-image" src="https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/s150x150/124325366_383369512815389_1548848706009910097_n.jpg?tp=1&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_ohc=bHh7983LR3oAX-Dw7-2&ccb=7-4&oh=4269f2930146e796fcd938cbb1959e02&oe=60824263&_nc_sid=7b02f1" alt="profile"/>

                
            </span>
            {child ? (
                <span className="profile-image-icon">
                    <img src={iconRender(child)} alt={child}/>
                </span>
            ): ""}
        </div>
    )
}

export default ProfileImage
