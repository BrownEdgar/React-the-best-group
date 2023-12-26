import React from "react";
import "./Posts.css";
import PropTypes from "prop-types"
import { useState, useEffect } from "react";
import axios from 'axios';

// Posts.propTypes = {
//     id: PropTypes.number.isRequired,
//     image: PropTypes.string,
//     title: PropTypes.string,
//     description: PropTypes.string
// };

export default function Posts() {

  const [posts, setPosts] = useState([]);




  useEffect(() => {
    const axiosData = () => {
      axios("https://jsonplaceholder.typicode.com/posts")
        .then(res => setPosts(res.data));
    };
    axiosData()
  }, [])

  return (
    <div className="Posts">
      <ol>
        {
          posts.map(element => {
            return (
              <li key={element.id}>
                {element.title}
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}