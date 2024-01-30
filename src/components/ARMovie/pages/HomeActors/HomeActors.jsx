import './HomeActors.scss'
import { useState } from 'react'
import { nanoid } from 'nanoid'
export default function HomeActors() {
  const [actors] = useState([
    {
      id: nanoid(6),
      title: 'Angelina Jolie',
      desc: 'Angelina Jolie is a renowned actress, filmmaker, and humanitarian. She has received critical acclaim for her roles in films such as "Girl, Interrupted," for which she won an Academy Award, and "Maleficent." Known for her versatility, Jolie is not only an accomplished actress but also a director, known for her work in films like "In the Land of Blood and Honey" and "First They Killed My Father." Her dedication to humanitarian causes and advocacy work has also earned her international recognition.',
      img: 'https://i.pinimg.com/736x/a2/db/82/a2db82182fa72b5a57d3b7befbface5a.jpg'
    },
    {
      id: nanoid(6),
      title: 'Will Smith',
      desc: 'Will Smith is a multifaceted entertainer, known for his acting, music, and charismatic personality. He gained fame through the TV series "The Fresh Prince of Bel-Air" and has since starred in numerous blockbuster films, including "Men in Black," "Independence Day," and "The Pursuit of Happyness." His dynamic performances and engaging on-screen presence have made him one of Hollywoods most beloved and successful actors..',
      img: 'https://d.newsweek.com/en/full/2321519/actor-will-smith.jpg?w=1200&f=904a35b0f18630b4da68ffb3b32f8d40'
    },
    {
      id: nanoid(6),
      title: 'Margott Robbie',
      desc: 'Margot Robbie is an Australian actress who has captured the hearts of audiences with her talent and beauty. She gained widespread recognition for her role as Harley Quinn in the DC Extended Universe, featuring in "Suicide Squad" and "Birds of Prey." Robbies versatility shines in a variety of genres, from her Oscar-nominated performance in "I, Tonya" to her captivating roles in films like "The Wolf of Wall Street" and "Once Upon a Time in Hollywood..',
      img: 'https://www.telecomasia.net/upload/sprint.editor/112/11248e599eeebc2492ce51be3fb1f69d.jpg'
    },
    {
      id: nanoid(6),
      title: 'Anna Elbakyan',
      desc: 'Anna Elbakyan is an Armenian actress. She became an Armenian star after headlining the drama Where Have You Been, Man of God',
      img: ' https://www.1tv.am/images/video/8/37011/k.jpeg'
    },
    {
      id: nanoid(6),
      title: 'Brad Pitt',
      desc: 'Brad Pitt is an iconic actor and producer with a career spanning decades. He has starred in a wide range of films, from classics like "Fight Club" and "Se7en" to award-winning performances in "12 Years a Slave" and "The Curious Case of Benjamin Button." Pitts charisma and dedication to his craft have made him one of Hollywoods leading actors, earning him numerous accolades, including Academy Awards for his acting and producing work.',
      img: 'https://media.architecturaldigest.com/photos/64249dbb5b98a5c5b21bc25d/16:9/w_2560%2Cc_limit/GettyImages-1469289926.jpg'
    },
    {
      id: nanoid(6),
      title: 'Robert De Niro',
      desc: 'Robert Anthony De Niro is an American actor and film producer. Known for his collaborations with Martin Scorsese, he is considered to be one of the greatest and most influential actors.',
      img: 'https://faroutmagazine.co.uk/static/uploads/1/2023/08/Robert-De-Niro-Actor-05-Far-Out-Magazine.jpg'
    },
    {
      id: nanoid(6),
      title: 'Khoren Levonyan',
      desc: 'Khoren Levonyan, is an Armenian presenter and actor. In 2017, Levonyan was awarded with the title of Honored Artist of Armenia',
      img: 'https://c0.mediamax.am/datas/znews/big_/2021/12/1638596487_3000024.jpg'
    },
    {
      id: nanoid(6),
      title: 'Ana De Armas', desc: 'Ana Celia de Armas Caso is a Cuban and Spanish actress. She began her career in Cuba with a leading role in the romantic drama Una rosa de Francia. At the age of 18, she moved to Madrid, Spain, and starred in the popular drama El Internado for six seasons from 2007 to 2010',
      img: ' https://m.media-amazon.com/images/M/MV5BMWM3MDMzNjMtODM5Ny00YmY0LWJhNzQtNTE1ZDNlNjllNDQ0XkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg'
    },
    {
      id: nanoid(6),
      title: 'Dakota Johnson',
      desc: 'Dakota Mayi Johnson is an American actress. The daughter of actors Don Johnson and Melanie Griffith, she made her film debut at age ten with a minor role in Crazy in Alabama with her mother. ',
      img: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg'
    },
    {
      id: nanoid(6),
      title: 'Sos Janibekyan',
      desc: 'Sos Janibekyan, is an Armenian actor, writer and producer. He is known for his role as Gokor on Trapped. He was a guest of White corner on September 25, 2014. ',
      img: 'https://www.1tv.am/images/video/6/27272/4.jpeg'
    },


  ])
  const [selectedActor, setSelectedActor] = useState(actors[0]);
  const handleform = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const actor = actors.find(actor => actor.id === e.target.value)
    setSelectedActor(actor);
  }
  return (
    <div className='HomeActors'>
      <div className="HomeActors__select">
        <h2>Popular Actors</h2>
        <form onChange={handleform} className="HomeActors__Form">
          <select name="select">
            {
              actors.map(actor => {
                return (
                  <option key={actor.id} value={actor.id}>{actor.title}</option>
                )
              })
            }
          </select>
        </form>
      </div>
      <div className="HomeActors__content">
        <div className="HomeActors__image">
          <img src={selectedActor.img} />
        </div>
        <div className="HomeActors__info">
          <h2>{selectedActor.title}</h2>
          <p>{selectedActor.desc}</p>
          <ul>
            <li><i className="bi bi-instagram"></i></li>
            <li><i className="bi bi-facebook"></i></li>
            <li><i className="bi bi-twitter"></i></li>
          </ul>
        </div>
      </div>
    </div>
  )
}