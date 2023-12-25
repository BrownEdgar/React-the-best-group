import React from "react";
import "./Posts.css";
import PropTypes from "prop-types"
import { useState, useEffect } from "react";

// Posts.propTypes = {
//     id: PropTypes.number.isRequired,
//     image: PropTypes.string,
//     title: PropTypes.string,
//     description: PropTypes.string
// };

export default function Posts() {

    const [posts, setPosts] = useState([]);

    const renderData = (posts) => {
        posts.map(element => {
            return (
                <ul key={element.id}>
                    <li>
                        `${element.id}:  ${element.title}`
                    </li>
                </ul>
            )
        })
    };

    const axiosData = () => {
        axios("https://jsonplaceholder.typicode.com/posts") 
        .then(res => renderData(res));
    };

    useEffect(() => {
        axiosData()
    }, [])

    return (
        <div className="Posts">
            {
               axiosData()
            }
        </div>
    )
}