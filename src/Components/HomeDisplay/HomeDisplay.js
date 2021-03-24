import React from 'react';
import "./homedisplay.css";

//imported library
import { v4 as uuid } from 'uuid';

//imported components
import HomeItem from "../HomeItem/HomeItem";


const posts = [
    {
        name: "Ali Pazani",
        content: "comment",
        image: "https://images.pexels.com/photos/2681741/pexels-photo-2681741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Andrei Tanase",
        content: "like",
        image: "https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Kelosn Downes",
        content: "views",
        image: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Jeremy Bishop",
        content: "followers",
        image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Ali Pazani",
        content: "comment",
        image: "https://images.pexels.com/photos/2681741/pexels-photo-2681741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Andrei Tanase",
        content: "like",
        image: "https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Kelosn Downes",
        content: "views",
        image: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Jeremy Bishop",
        content: "followers",
        image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Ali Pazani",
        content: "comment",
        image: "https://images.pexels.com/photos/2681741/pexels-photo-2681741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Andrei Tanase",
        content: "like",
        image: "https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Kelosn Downes",
        content: "views",
        image: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Jeremy Bishop",
        content: "followers",
        image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Ali Pazani",
        content: "comment",
        image: "https://images.pexels.com/photos/2681741/pexels-photo-2681741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Andrei Tanase",
        content: "like",
        image: "https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Kelosn Downes",
        content: "views",
        image: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Jeremy Bishop",
        content: "followers",
        image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
]

const HomeDisplay = () => {

    return (
        <div className="home-items-display-container">
            <ul className="home-items-display">
                {
                    posts.map((post) => (
                        <HomeItem key={uuid()} post={post} />
                    ))
                }
            </ul>
        </div>
    )
}

export default HomeDisplay;
