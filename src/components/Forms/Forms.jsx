import { useState } from 'react'
import './Forms.scss'
import { nanoid } from 'nanoid'
import HarryPotter from './HarryPotter.mp3';
export default function Forms() {
  const [films, setFilms] = useState([
    {

      id: nanoid(6),
      name: 'Harry Potter and the Philosopher ',
      title: 'Let the magic begin.',
      Date: '11/16/2001 (GB),',
      genre: 'Adventure, Fantasy',
      description: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.",
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg'

    },
    {
      id: nanoid(6),
      name: 'Harry Potter and the Chamber of Secrets ',
      title: 'Hogwarts is back in session.',
      Date: '11/15/2002 (GB)',
      genre: 'Adventure, Fantasy',
      description: "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.",
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg'
    },
    {
      id: nanoid(6),
      name: 'Harry Potter and the Prisoner of Azkaban',
      title: 'Something wicked this way comes.',
      Date: '05/31/2004 (GB)',
      genre: 'Adventure, Fantasy',
      description: "Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all.",
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg'
    },
    {
      id: nanoid(6),
      name: 'Harry Potter and the Goblet of Fire ',
      title: 'Dark And Difficult Times Lie Ahead.',
      Date: '11/18/2005 (GB)',
      genre: 'Adventure, Fantasy',
      description: "When Harry Potter's name emerges from the Goblet of Fire, he becomes a competitor in a grueling battle for glory among three wizarding schools—the Triwizard Tournament. But since Harry never submitted his name for the Tournament, who did? Now Harry must confront a deadly dragon, fierce water demons and an enchanted maze only to find himself in the cruel grasp of He Who Must Not Be Named.",
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg'

    },
    {
      id: nanoid(6),
      name: 'Harry Potter and the Order of the Phoenix',
      title: 'Evil Must Be Confronted.',
      Date: '07/12/2007 (GB)',
      genre: 'Adventure, Fantasy',
      description: "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students to defend themselves against the dark arts.",
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg'
    },
    {
      id: nanoid(6),
      name: 'Harry Potter and the Half-Blood Prince',
      title: 'Dark Secrets Revealed',
      Date: '07/15/2009(GB)',
      genre: 'Adventure, Fantasy',
      description: "As Lord Voldemort tightens his grip on both the Muggle and wizarding worlds, Hogwarts is no longer a safe haven. Harry suspects perils may even lie within the castle, but Dumbledore is more intent upon preparing him for the final battle fast approaching. Together they work to find the key to unlock Voldemorts defenses and to this end, Dumbledore recruits his old friend and colleague Horace Slughorn, whom he believes holds crucial information. Even as the decisive showdown looms, romance blossoms for Harry, Ron, Hermione and their classmates. Love is in the air, but danger lies ahead and Hogwarts may never be the same again.",
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7gAB4UV00GpzJyP2SDPRJIJjF1G.jpg'
    },
    {
      id: nanoid(6),
      name: 'Harry Potter and the Deathly Hallows: Part 1',
      title: 'One Way… One Fate… One Hero.',
      Date: '11/19/2010 (GB)',
      genre: 'Adventure, Fantasy',
      description: "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg'
    },
    {
      id: nanoid(6),
      name: 'Harry Potter and the Deathly Hallows: Part 2',
      title: 'It all ends here.',
      Date: '07/15/2011 (GB)',
      genre: 'Adventure, Fantasy',
      description: "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nYRSey4YR40AYoPVJ58tWqtBANN.jpg'
    },


  ]
  )

  const [selectedFilm, setSelectedFilm] = useState(films[0])
  const handleForm = (e) => {
    e.preventDefault();
    const film = films.find(film => film.name === e.target.value)
    setSelectedFilm(film);


  }


  return (
    <div className="Forms">
      <audio className='audio' src={HarryPotter} controls ></audio>
      <form onChange={handleForm} className='Forms__form'>

        <label className='Forms__Label' htmlFor="movies">Choose a Film:</label>

        <select id="movies">
          <option value={films[0].name}>{films[0].name}</option>
          <option value={films[1].name}>{films[1].name}</option>
          <option value={films[2].name}>{films[2].name}</option>
          <option value={films[3].name}>{films[3].name}</option>
          <option value={films[4].name}>{films[4].name}</option>
          <option value={films[5].name}>{films[5].name}</option>
          <option value={films[6].name}>{films[6].name}</option>
          <option value={films[7].name}>{films[7].name}</option>
        </select>

      </form>
      <div className='Forms__films'>
        <div className="Forms__image">
          <img src={selectedFilm.img} />
        </div>
        <div className="Forms__content">
          <h2>{selectedFilm.name}</h2>
          <p className='Forms__date'><span>{selectedFilm.Date}</span> <span> {selectedFilm.genre}</span></p>
          <h3>{selectedFilm.title}</h3>
          <p>{selectedFilm.description}</p>
          <div className="Forms__icons">
            <a><i class="bi bi-magic"></i> </a>
            <a><i class="bi bi-award"></i></a>
            <a><i class="bi bi-heart"></i> </a>
          </div>


        </div>
      </div>
    </div>
  )
}
