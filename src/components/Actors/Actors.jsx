import { useState } from 'react'
import './Actors.scss'
export default function Actors(){
    const [actors, setActors] = useState([
        {
            id:1,
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lLFs80wuxxHd1cmFz470hRDZBHj.jpg',
            name:'Daniel Radcliffe',
            gender:'male',
            birthday:'1989-07-23 (34 years old)'            
        },
        {
            id:2,
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tvPPRGzAzdQFhlKzLbMO1EpuTJI.jpg',
            name:'Emma Watson',
            gender:'Female',
            birthday:'1990-04-15 (33 years old)'            
        },
        {
            id:3,
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/q2KZZ0ltTEl7Sf8volNFV1JDEP4.jpg',
            name:'Rupert Grint',
            gender:'male',
            birthday:'1988-08-24 (35 years old)'            
        },
        {
            id:4,
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tJr9GcmGNHhLVVEH3i7QYbj6hBi.jpg',
            name:'Ralph Fiennes',
            gender:'male',
            birthday:'1962-12-22 (61 years old)'            
        },
        {
            id:5,
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hJMbNSPJ2PCahsP3rNEU39C8GWU.jpg',
            name:'Helena Carter',
            gender:'Female',
            birthday:'1966-05-26 (57 years old)'            
        },
        {
            id:6,
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7tADZs4ILE93oJ5pAh6mKQFEq2m.jpg',
            name:'Alan Rickman',
            gender:'male',
            birthday:'2016-01-14 (69 years old)'            
        },
       
    ])

return(
    <div className="Actors">
        
        {
            actors.map(actor =>{
                return(
                    <div className='Actors__card' key={actor.id}>
                        <div className="Actors__image">
                        <img src={actor.img}/>
                        </div>                      
                        <div className="Actors__content">
                        <h3>{actor.name}</h3>
                        <p><b>{actor.gender}</b></p>
                        <p><b>{actor.birthday}</b></p>
                        </div>
                        <div className="Actors__icons">
                            <a><i class="bi bi-facebook"></i></a>
                            <a><i class="bi bi-instagram"></i></a>
                            <a><i class="bi bi-twitter"></i></a>
                        </div>
                       
                    </div>
                )
            })
        }
    </div>
)

}