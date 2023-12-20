import './App.css'
import Posts from './components/Posts/Posts.jsx';
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: "https://lonelyphotons877861708.files.wordpress.com/2022/08/uy-scuti-05.png",
      title: "Title 1", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti suscipit molestias ullam recusandae nulla dolorum ducimus earum voluptatibus soluta aspernatur fugit voluptatum quisquam odit dolorem, molestiae minima? Eveniet, distinctio."
    }, 
    {
      id: 2,
      image: "https://www.parliament.uk/contentassets/a25a06e5ca1942f6997124b941b00629/dsc_3114_jt-1.jpg?width=1000&quality=85",
      title: "Title 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti suscipit molestias ullam recusandae nulla dolorum ducimus"
    }, 
    {
      id: 3,
      image: "https://images.ctfassets.net/dhouwl0aqgbx/1UKaGHklQ4pktcoC0XRw9L/5b00bc5b396ddced6ef847ad126ae24f/Be-On-TV-BIG-BROTHER.jpg",
      title: "Title 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti suscipit molestias ullam "
    }
  ]);
  return (
    <div className='App'>
      <Posts posts={posts}/>
    </div>
  )
}

export default App
