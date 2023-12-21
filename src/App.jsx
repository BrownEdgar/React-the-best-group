import { useState } from 'react'
import Posts from './components/Posts/Posts'
import './App.scss'

function App() {
  const [posts] = useState([
    {
      id: 1,
      image: 'https://www.wallpapers13.com/wp-content/uploads/2016/02/Ocean-Shark-diving-recording-Desktop-Wallpaper-HD-3840x2400-1920x1080.jpg',
      name: "Training",
      title: "Get Your Kids & Family into Scuba Diving",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quod minima vel sequi nobis natus cumque culpa! Molestias illo placeat explicabo sunt porro quam? Totam adipisci maxime accusamus enim quo!",
      button: "Read more..."
    },
    {
      id: 2,
      image: 'https://www.sunrise-divers.com/wp-content/uploads/2017/02/diver-fish-clear-water.jpg',
      name: "Club",
      title: "Ocean Conservation Initiatives in Mauritius",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quod minima vel sequi nobis natus cumque culpa! Molestias illo placeat explicabo sunt porro quam? Totam adipisci maxime accusamus enim quo!",
      button: "Read more..."
    },
    {
      id: 3,
      image: 'https://media.cntraveler.com/photos/6493122fee4e39263d8b0a27/16:9/w_1920,h_1080,c_limit/How%20Your%20Next%20Dive%20Trip%20Can%20Help%20Save%20the%20Ocean_CLU02320.jpg',
      name: "Club",
      title: "New Freediver Initiatives Doing the Impossible",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quod minima vel sequi nobis natus cumque culpa! Molestias illo placeat explicabo sunt porro quam? Totam adipisci maxime accusamus enim quo!",
      button: "Read more..."
    },
  ])

  return (
    <div className='App'>
      <Posts posts={posts} />
    </div>
  )
}

export default App
