import React from 'react'
import './Posts.scss'

export default function Posts({posts}) {
    return(
        <div className='Posts'>
            {
                posts.map(christmas =>{
                    return(
                        <article className='Posts__card' key={christmas.id}>
                            <div className='Posts__img'>
                                <img src={christmas.image}/>
                            </div>
                            <div className='Posts__content'>
                                <h2>{christmas.title}</h2>
                                <p className='Posts__desc'>{christmas.description}</p>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}