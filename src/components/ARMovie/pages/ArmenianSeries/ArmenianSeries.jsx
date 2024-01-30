import { useState } from "react"
import './ArmenianSeries.scss'

export default function ArmenianSeries() {
  const [buttons] = useState(['Chaos', 'Full House', 'Patvi Hamar', 'Kargin Serial',])
  const [series] = useState([
    {
      title: 'Chaos',
      desc: 'The events in the film take place not in the 19th century, in Baku, but in the 21st century, in Yerevan, which makes it possible to imagine how the heroes of that time would live in the present. The plot completely preserved the characters with their characters, destinies and names.',
      img: 'https://bravo.am/static/gallery/72634/4e5f80af7ea9758407eaddda1355a13f.jpg'
    },
    {
      title: 'Full House',
      desc: 'Full House is an Armenian sitcom television series which borrowed name from American sitcom classic with the same name but had no connection in plot developed by Armen Petrosyan that premiered on Armenia TV on 4 October 2014 and hosted its last episode on 5 June 2019.',
      img: 'https://i.ytimg.com/vi/MTRWfmc_eyA/maxresdefault.jpg'
    },
    {
      title: 'Patvi Hamar',
      desc: 'The TV series is based on Shirvanzades play "For the Sake of Love". It takes place in nowadays Armenia. This classic work of literature is topical even today. It tells of honor, dignity, morality and other universal values, which are mainly represented in the series by Artashes Otaryan and Margarit , the daughter of famous businessman Andreas Elizbaryan.',
      img: 'https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-9/88142942_2796212273819554_6972726826342809600_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=rh5lefTM3Y8AX-M3bNs&_nc_ht=scontent.fevn7-1.fna&oh=00_AfAqeUlNtQJ1BskiZVnvCi_b3Hx3uKQy9KzupJhtAEPOyQ&oe=65DF4134'
    },
    {
      title: 'Kargin Serial',
      desc: '"Kargin serial", Armenian sitcom. It was shown on "Armenia" TV from October 2010 to June 2013. It tells about the Karagyozyan family. It was created based on the American sitcom "Two and a Half Men", adapted to the Armenian reality.',
      img: 'https://bravo.am/uploads/2012/08/top_9b4143f88a5769348431ee02f7400b90.jpg'
    }
  ])
  const [selectedSeries, setSelectedSeries] = useState(series[0]);

  const changeSeries = (button) => {
    const serie = series.find(serie => serie.title === button);
    setSelectedSeries(serie);
  }

  return (
    <div className="ArmenianSeries">
      <div className="ArmenianSeries__btns">
        <h2>Popular TV-Series</h2>
        {
          buttons.map(button => {
            return (
              <button
                onClick={() => changeSeries(button)}
                key={button}
                className={selectedSeries.title === button ? 'active' : ''}>
                {button}</button>
            )
          })
        }
      </div>
      <div className="ArmenianSeries__content">
        <div className="ArmenianSeries__image">
          <img src={selectedSeries.img} alt={selectedSeries.title} />
        </div>
        <div className="ArmenianSeries__info">
          <h2>{selectedSeries.title}</h2>
          <p>{selectedSeries.desc}</p>
        </div>
      </div>
    </div>
  )
}
