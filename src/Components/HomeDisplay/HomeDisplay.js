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
        name: "Pixa Bay",
        content: "like",
        image: "https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Jay Park",
        content: "like",
        image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Kelosn Downes",
        content: "views",
        image: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "JMaxime Francis",
        content: "followers",
        image: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Helena Lopez",
        content: "comment",
        image: "https://images.pexels.com/photos/2055236/pexels-photo-2055236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Paul Efe",
        content: "like",
        image: "https://images.pexels.com/photos/763934/pexels-photo-763934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Asa Dugger",
        content: "views",
        image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Harsh Raj Gond",
        content: "followers",
        image: "https://images.pexels.com/photos/2245035/pexels-photo-2245035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Harsh Kushwaha",
        content: "comment",
        image: "https://images.pexels.com/photos/1124834/pexels-photo-1124834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Anete Lusina",
        content: "like",
        image: "https://images.pexels.com/photos/6353847/pexels-photo-6353847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Cotton Bro",
        content: "views",
        image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Josh Sorenson",
        content: "followers",
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
