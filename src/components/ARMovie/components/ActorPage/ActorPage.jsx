import { useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { useState } from 'react';
import './ActorPage.scss'


export default function ActorPage() {
  const [comicsActors] = useState([
    {
      id: nanoid(6),
      name: 'Robert Downey Jr.',
      bio: 'Born on April 4, 1965, in New York City, Robert John Downey Jr. is a highly acclaimed American actor and producer. He gained early recognition with roles in films like "Less Than Zero" (1987) and "Chaplin" (1992), earning an Academy Award nomination for the latter. After overcoming personal challenges, Downey staged a successful comeback with notable performances in "Gothika" (2003) and "Kiss Kiss Bang Bang" (2005). However, he achieved global fame as Tony Stark/Iron Man in the Marvel Cinematic Universe (MCU), starting with "Iron Man" (2008) and continuing through films like "The Avengers" (2012) and the record-breaking "Avengers: Endgame" (2019). Beyond his acting career, Downey has been open about his past struggles with substance abuse and has since maintained sobriety. He is married to Susan Downey, and the couple has two children.',
      img: 'https://www.thestatesman.com/wp-content/uploads/2023/12/robert-downey-jr.jpg'
    },
    {
      id: nanoid(6),
      name: 'Elizabeth Olsen',
      bio: 'Born on February 16, 1989, in Sherman Oaks, Los Angeles, Elizabeth Chase Olsen is an American actress. She is best known for her role as Wanda Maximoff/Scarlet Witch in the Marvel Cinematic Universe (MCU). Olsen made her first appearance as Scarlet Witch in a mid-credits scene of "Captain America: The Winter Soldier" (2014) and subsequently played a prominent role in films such as "Avengers: Age of Ultron" (2015), "Avengers: Infinity War" (2018), and "Avengers: Endgame" (2019). Beyond the MCU, Elizabeth Olsen has garnered acclaim for her performances in independent films, including "Martha Marcy May Marlene" (2011) and "Wind River" (2017). Known for her talent and versatility, Olsen has become a notable figure in both blockbuster franchises and more nuanced, character-driven cinema.',
      img: 'https://i.pinimg.com/originals/84/4b/38/844b38cf8156889e608779f18a082233.jpg'
    },
    {
      id: nanoid(6),
      name: 'Chris Evans',
      bio: 'Born on June 13, 1981, in Boston, Massachusetts, Christopher Robert Evans, widely known as Chris Evans, is an American actor and filmmaker. He rose to prominence with his portrayal of Johnny Storm/Human Torch in Marvels "Fantastic Four" film series. However, Evans achieved global fame and became an iconic figure in the entertainment industry for his role as Steve Rogers/Captain America in the Marvel Cinematic Universe (MCU). His debut as Captain America was in "Captain America: The First Avenger" (2011), and he reprised the role in subsequent MCU films, including "The Avengers" (2012), "Captain America: The Winter Soldier" (2014), and "Avengers: Endgame" (2019). Outside of his superhero ventures, Evans has showcased his versatility in various films and has ventured into directing.',
      img: 'https://i.pinimg.com/736x/68/d6/80/68d6807198fb1ed50ace149ffc70af80.jpg'
    },
    {
      id: nanoid(6),
      name: 'Tom Holland',
      bio: 'Born on June 1, 1996, in Kingston upon Thames, London, Tom Holland is a British actor and producer best known for his portrayal of Peter Parker/Spider-Man in the Marvel Cinematic Universe (MCU). Holland made his debut as the iconic superhero in "Captain America: Civil War" (2016) and continued to charm audiences with his performances in solo Spider-Man films, including "Spider-Man: Homecoming" (2017) and "Spider-Man: Far From Home" (2019). Known for his youthful charm and acrobatic skills, Holland has become a beloved figure in the MCU. Beyond his superhero role, he has showcased his acting range in films like "The Impossible" (2012) and "Cherry" (2021).',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg'
    },
    {
      id: nanoid(6),
      name: 'Scarlett Johansson',
      bio: 'Born on November 22, 1984, in New York City, Scarlett Ingrid Johansson is an American actress and singer. With a career spanning over two decades, Johansson has established herself as one of Hollywoods leading actresses. She gained early recognition for her roles in films like "Lost in Translation" (2003) and "Girl with a Pearl Earring" (2003), receiving critical acclaim and award nominations. Scarlett Johansson is particularly renowned for her portrayal of Natasha Romanoff/Black Widow in the Marvel Cinematic Universe (MCU). She first appeared as Black Widow in "Iron Man 2" (2010) and continued to play the character in various MCU films, showcasing her versatility in action and drama. Apart from her successful acting career, Johansson has ventured into music and philanthropy, making her a multifaceted presence in the entertainment industry.',
      img: 'https://www.refinery29.com/images/10549259.jpg'
    },
    {
      id: nanoid(6),
      name: 'Chris Hemsworth',
      bio: 'Born on August 11, 1983, in Melbourne, Australia, Chris Hemsworth is an Australian actor best known for his portrayal of Thor in the Marvel Cinematic Universe (MCU). Hemsworth made his debut as the God of Thunder in "Thor" (2011) and continued to play the character in subsequent MCU films, including "The Avengers" (2012), "Thor: Ragnarok" (2017), and "Avengers: Endgame" (2019). Before his superhero breakthrough, Hemsworth gained attention for his role in the television series "Home and Away" and rose to international fame with his performance as James T. Kirks father in "Star Trek" (2009). Known for his charismatic screen presence and physique, Chris Hemsworth has become one of Hollywoods leading action stars. In addition to his work in the MCU, he has showcased his versatility in films like "Rush" (2013) and "Extraction" (2020).',
      img: 'https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg'
    },
    {
      id: nanoid(6),
      name: 'Tom Hiddleston',
      bio: 'Born on February 9, 1981, in Westminster, London, Thomas William Hiddleston, commonly known as Tom Hiddleston, is an English actor. He gained widespread recognition and acclaim for his portrayal of Loki, the God of Mischief, in the Marvel Cinematic Universe (MCU). Hiddleston first appeared as Loki in "Thor" (2011) and continued to play the character in various MCU films, including "The Avengers" (2012), "Thor: The Dark World" (2013), and "Avengers: Endgame" (2019). Apart from his success in the superhero genre, Hiddleston has showcased his talent in a variety of roles, including the critically acclaimed BBC series "The Night Manager" (2016) and the Shakespearean adaptation "Coriolanus" (2013). Known for his distinctive voice, charm, and versatility, Tom Hiddleston has established himself as a respected actor in both film and television.',
      img: 'https://d27o7y1r7mnbwc.cloudfront.net/media/uploads/clients/tom-hiddleston/images/2020-11-25_121004_TH.jpg'
    },
    {
      id: nanoid(6),
      name: 'Benedict Cumberbatch',
      bio: 'Born on July 19, 1976, in London, England, Benedict Timothy Carlton Cumberbatch is an acclaimed English actor. He gained widespread recognition for his portrayal of Sherlock Holmes in the BBC series "Sherlock" (2010–2017), earning critical acclaim and numerous awards for his performance. Benedict Cumberbatch has showcased his versatility in various film roles, including notable performances in "The Imitation Game" (2014), where he portrayed mathematician and logician Alan Turing, and as Doctor Strange in the Marvel Cinematic Universe, starting with "Doctor Strange" (2016) and continuing in films like "Avengers: Infinity War" (2018) and "Avengers: Endgame" (2019). Known for his distinctive voice and intense on-screen presence, Cumberbatch has received praise for his work in both dramatic and genre-defying roles, solidifying his status as one of the prominent actors of his generation.',
      img: 'https://cdn.britannica.com/96/173696-050-7070A29D/Benedict-Cumberbatch-British-stage-screen.jpg'
    },
  ])
  const { name } = useParams();
  const selectedActor = comicsActors.find(actor => actor.name === name)

  return (
    <div className='ActorPage'>
      <div className="ActorPage__img">
        <img src={selectedActor.img} alt={selectedActor.name} />
      </div>
      <div className="ActorPage__content">
        <h2>{selectedActor.name}</h2>
        <p>{selectedActor.bio}</p>
      </div>
    </div>
  )
}
