import React from 'react'
import './Actors.scss'
import { useState } from 'react'
import { nanoid } from 'nanoid'
export default function Actors() {
    const [armActors] = useState([
        {
            id: nanoid(5),
            img: 'https://a1plus.am/static/articles/34/58/62/l-y1Rq5VJsyX.jpg',
            name: 'Mkrtich Arzumanyan',
            age: 47,
            movies: 'Qayl Dziov,Gorcakal-044,AlaBalaNica,Hyusis-Hrav',
        },
        {
            id: nanoid(5),
            img: 'https://www.1tv.am/images/video/5/21394/04.jpeg',
            name: 'Hayk Marutyan',
            age: 47,
            movies: 'AlaBalaNica,Siro Gorcakic,Super Mama,Mer Bak',
        },
        {
            id: nanoid(5),
            img: 'https://winetravelawards.com/wp-content/uploads/2023/02/img_9290.jpg',
            name: 'Nazeni Hovanisyan',
            age: 41,
            movies: 'AlaBalaNica,Spanvac Aghavnin,Anhayt Bajanord',
        },
        {
            id: nanoid(5),
            img: 'https://zarkfoundation.com/wp-content/uploads/2023/02/Luiza-Ghambaryan.jpg',
            name: 'Luiza Ghambaryan',
            age: 47,
            movies: 'Anavart Trijq,Thank You Hayrik,Xavarman Ore',
        },
        {
            id: nanoid(5),
            img: 'https://armlur.am/wp-content/uploads/2016/05/big_1330943736_4041870_ts1330943763.jpg',
            name: 'Luiza Nersisyan',
            age: 46,
            movies: 'Siro Gorcakic,Qayl Dziov,Skotch&Whiskey',
        },
        {
            id: nanoid(5),
            img: 'https://www.kino-teatr.ru/acter/photo/6/0/481306/938542.jpg',
            name: 'Samvel Tadevosyan',
            age: 30,
            movies: 'Kyanq u kriv,Bravo Virtuoz,Soghomoni Ergery',
        },
    ])

    return (
        <div className="ArmActors">
            {
                armActors.map(actor => {
                    return (
                        <div key={actor.id} className="ArmActors__Card">
                            <div className="ArmActors__image">
                                <img src={actor.img} />
                            </div>
                            <div className="ArmActors__content">
                                <h2>{actor.name}</h2>
                                <p>Age: {actor.age}</p>
                                <p>Movies: {actor.movies}</p>
                                <ul>
                                    <li><i className="bi bi-instagram"></i></li>
                                    <li><i className="bi bi-facebook"></i></li>
                                    <li><i className="bi bi-twitter"></i></li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}  
