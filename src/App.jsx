import Users from './components/Users/Users'
import './App.css'
import Post from './components/Post/Post'
import { useState } from 'react'

function App() {
  const [posts,setPosts] = useState([
    {
    id:1,
    name:'Java-Script',
    description:'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles.',
    color:'yellow'
    },
    {
      id:2,
      name:'Python',
      description:'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected.',
      color:'blue'
      },
      {
        id:3,
        name:'C++',
        description:'C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory.',
        color:'purple'
        },
  ])


  return (
    <div className='App'>
     <h1>Programming Languages</h1>
      <Post posts={posts} />
    </div>
  )
}

export default App
