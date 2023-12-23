<<<<<<< HEAD
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
=======
import { useState } from 'react';
import Posts from './components/Posts/Posts'
import './App.scss'


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Pandas',
      image: 'https://images.unsplash.com/photo-1593526492327-b071f3d5333e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum voluptatem sunt labore corporis sed? Libero, fuga incidunt. Officiis porro, quidem eius omnis recusandae ratione id laborum architecto animi obcaecati nemo!'
    },
    {
      id: 2,
      title: 'Mongoose',
      image: 'https://images.unsplash.com/photo-1560572765-d75742ca1cf0?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum voluptatem sunt labore corporis sed? Libero, fuga incidunt. Officiis porro, quidem eius omnis recusandae ratione id laborum architecto animi obcaecati nemo!'
    }
>>>>>>> 5b22ae7a19b7b7a4bd329fbcfd411b4b0171713b
  ])

  return (
    <div className='App'>
<<<<<<< HEAD
=======
      <h1 className='App__title'>Our posts</h1>
>>>>>>> 5b22ae7a19b7b7a4bd329fbcfd411b4b0171713b
      <Posts posts={posts} />
    </div>
  )
}

export default App
