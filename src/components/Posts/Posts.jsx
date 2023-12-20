import React from "react";
import "./Posts.css";
import PropTypes from "prop-types"

Posts.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};

export default function Posts({posts}) {
    return (
        <div className="Posts">
            {
                posts.map(element => {
                    return (
                        <div className="Posts__container" key={element.id}>
                            <img src={element.image} className="Posts__image"/>
                            <h3 className="Posts__title">{element.title}</h3>
                            <p className="Posts__description">{element.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}