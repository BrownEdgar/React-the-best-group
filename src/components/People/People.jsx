import React from "react";
import "./People.css";
import { useState } from "react";

export default function People() {
    
    const [people, setPeople] = useState([
        {
            id: 1,
            name: "Armen",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, est."
        },
        {
            id: 2,
            name: "Aram",
            description: "Lorem ipsum dolor sit amet, Vero, est."
        },
        {
            id: 3,
            name: "Karen",
            description: "Lorem consectetur adipisicing elit. Vero, est."
        }, 
        {
            id: 4,
            name: "Sona",
            description: "Lorem ipsum consectetur adipisicing elit dolor sit amet, consectetur adipisicing elit. Vero, est."
        }
    ]);

    const handleDelete = (e) => {
        e.target.parentElement.remove()
    };

    return (
        <div className="container">
            <h1>People</h1>
            <hr />
            {
                people.map(person => {
                    return( <div className="person">
                            <h3>{person.name}</h3>
                            <p>{person.description}</p>
                            <button onClick={handleDelete}>Delete user</button>
                        </div>
                    )
                })
            }
        </div>
    )
}