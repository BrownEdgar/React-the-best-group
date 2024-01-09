import React from "react";
import "./SelectFilm.css"
import { useState } from "react";


// ՏԱՐԲԵՐԱԿ  1՝  ????????????????????????????????????????

export default function SelectFilm () {
console.log(555)
    const [films, setFilms] = useState([
        {
            id: 1,
            img: "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
            title: "The Godfather",
            description: "The Godfather is a 1972 American epic crime film[2] directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same title. The film stars Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte and Diane Keaton. It is the first installment in The Godfather trilogy, chronicling the Corleone family under patriarch Vito Corleone (Brando) from 1945 to 1955. It focuses on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss."
        },
        {
            id: 2,
            img: "https://m.media-amazon.com/images/M/MV5BMjEzNTA1OTY2OV5BMl5BanBnXkFtZTYwNDkyMzQ5._V1_.jpg",
            title: "The Last Don",
            description: "The Last Don is a 1996 novel by American author Mario Puzo, best known as the author of the 1969 novel The Godfather. The story follows an aging Mafia Don and his family as they try to retain power"
        },
        {
            id: 3,
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Sincitypostercast.jpg/220px-Sincitypostercast.jpg",
            title: "Sin City",
            description: "Sin City (also known as Frank Miller's Sin City)[3] is a 2005 American neo-noir crime anthology film directed by Robert Rodriguez and Frank Miller based on Miller's comic book series of the same name"
        }
    ]);

  const handleChange = (e) => {  

    const valueOfSelectedOption = e.target.value
    let idOfSelectedFilm;

    switch (valueOfSelectedOption) {
        case "TheGodfather": idOfSelectedFilm = 1;
            break;
        case "TheLastDon": idOfSelectedFilm = 2;
            break;
        case "SinCity": idOfSelectedFilm = 3;
            break;
        default: idOfSelectedFilm = 0;
            break;
    }

    switch (idOfSelectedFilm) {
        case 1:
            setFilms([{
                id: 1,
                img: "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
                title: "The Godfather",
                description: "The Godfather is a 1972 American epic crime film[2] directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same title. The film stars Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte and Diane Keaton. It is the first installment in The Godfather trilogy, chronicling the Corleone family under patriarch Vito Corleone (Brando) from 1945 to 1955. It focuses on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss."
            }]);
        break;
        case 2: setFilms([{
            id: 2,
            img: "https://m.media-amazon.com/images/M/MV5BMjEzNTA1OTY2OV5BMl5BanBnXkFtZTYwNDkyMzQ5._V1_.jpg",
            title: "The Last Don",
            description: "The Last Don is a 1996 novel by American author Mario Puzo, best known as the author of the 1969 novel The Godfather. The story follows an aging Mafia Don and his family as they try to retain power"
        }]);
        break;
        case 3: setFilms([{
            id: 3,
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Sincitypostercast.jpg/220px-Sincitypostercast.jpg",
            title: "Sin City",
            description: "Sin City (also known as Frank Miller's Sin City)[3] is a 2005 American neo-noir crime anthology film directed by Robert Rodriguez and Frank Miller based on Miller's comic book series of the same name"
        }]);
        break;
      default: setFilms([])
    } 
  }
    const renderSelectedFilm = () => {
      return films.map(film => {
        return (
          <div className="SelectFilm__card" key={film.id}>
                <div className="SelectFilm__img">
              <img src={film?.img}/>
                </div>
                <div className="SelectFilm__titleAndDescription">
                    <h3>{film?.title}</h3> <br/>
                    <p>{film?.description}</p>
                </div>
            </div>
        )
    })};

    return (
        <div className="SelectFilm">
            <h2 className="SelectFilm__Choose">Choose the film</h2>
            <form>
                <select name="selectBar" id="select" onChange={handleChange}>
                    <option value="TheGodfather">The Godfather</option>
                    <option value="TheLastDon">The Last Don</option>
                    <option value="SinCity">Sin City</option>
                </select>
            </form>
            {renderSelectedFilm()} 
        </div>
    )
}


// ՏԱՐԲԵՐԱԿ  2`  ?????????????????????????????????????

// export default function SelectFilm () {

//     const [films, setFilms] = useState([
//         {
//             id: 1,
//             img: "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
//             title: "The Godfather",
//             description: "The Godfather is a 1972 American epic crime film[2] directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same title. The film stars Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte and Diane Keaton. It is the first installment in The Godfather trilogy, chronicling the Corleone family under patriarch Vito Corleone (Brando) from 1945 to 1955. It focuses on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss."
//         },
//         {
//             id: 2,
//             img: "https://m.media-amazon.com/images/M/MV5BMjEzNTA1OTY2OV5BMl5BanBnXkFtZTYwNDkyMzQ5._V1_.jpg",
//             title: "The Last Don",
//             description: "The Last Don is a 1996 novel by American author Mario Puzo, best known as the author of the 1969 novel The Godfather. The story follows an aging Mafia Don and his family as they try to retain power"
//         },
//         {
//             id: 3,
//             img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Sincitypostercast.jpg/220px-Sincitypostercast.jpg",
//             title: "Sin City",
//             description: "Sin City (also known as Frank Miller's Sin City)[3] is a 2005 American neo-noir crime anthology film directed by Robert Rodriguez and Frank Miller based on Miller's comic book series of the same name"
//         }
//     ]);

//     return (
//         <div className="SelectFilm">
//             <h2 className="SelectFilm__Choose">Choose the film</h2>
//             <form>
//                 <select name="selectBar" id="select">
//                     <option value="TheGodfather">The Godfather</option>
//                     <option value="TheLastDon">The Last Don</option>
//                     <option value="SinCity">Sin City</option>
//                 </select>
//             </form>
//                 {
//                     const valueOfSelectedOption = document.querySelector("#select").value;
//                     let idOfSelectedFilm;
                
//                     switch (valueOfSelectedOption) {
//                         case "TheGodfather": idOfSelectedFilm = 1;
//                             break;
//                         case "TheLastDon": idOfSelectedFilm = 2;
//                             break;
//                         case "SinCity": idOfSelectedFilm = 3;
//                             break;
//                         default: idOfSelectedFilm = 0;
//                             break;
//                     }
                
//                     switch (idOfSelectedFilm) {
//                         case 1:
//                             setFilms([{
//                                 id: 1,
//                                 img: "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
//                                 title: "The Godfather",
//                                 description: "The Godfather is a 1972 American epic crime film[2] directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same title. The film stars Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte and Diane Keaton. It is the first installment in The Godfather trilogy, chronicling the Corleone family under patriarch Vito Corleone (Brando) from 1945 to 1955. It focuses on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss."
//                             }]);
//                         break;
//                         case 2: setFilms([{
//                             id: 2,
//                             img: "https://m.media-amazon.com/images/M/MV5BMjEzNTA1OTY2OV5BMl5BanBnXkFtZTYwNDkyMzQ5._V1_.jpg",
//                             title: "The Last Don",
//                             description: "The Last Don is a 1996 novel by American author Mario Puzo, best known as the author of the 1969 novel The Godfather. The story follows an aging Mafia Don and his family as they try to retain power"
//                         }]);
//                         break;
//                         case 3: setFilms([{
//                             id: 3,
//                             img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Sincitypostercast.jpg/220px-Sincitypostercast.jpg",
//                             title: "Sin City",
//                             description: "Sin City (also known as Frank Miller's Sin City)[3] is a 2005 American neo-noir crime anthology film directed by Robert Rodriguez and Frank Miller based on Miller's comic book series of the same name"
//                         }]);
//                         break;
//                     } 
                
//                     const renderSelectedFilm = () => {films.map(film => {
//                         return (
//                             <div className="SelectFilm__card" key={idOfSelectedFilm}>
//                                 <div className="SelectFilm__img">
//                                     {film.img}
//                                 </div>
//                                 <div className="SelectFilm__titleAndDescription">
//                                     <h3>{film.title}</h3> <br/>
//                                     <p>{film.description}</p>
//                                 </div>
//                             </div>
//                         )
//                     })};

//                     renderSelectedFilm()
//                 } 
//         </div>
//     )
// }


