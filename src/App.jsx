import './App.scss'
import Posts from './components/Posts/Posts'
import Todos from './components/Todos/Todos'
import Comments from './components/Comments/Comments'
import Users from './components/Users/Users'
import { useState } from 'react'

function App() {
  const components = [
    < Posts />, <Todos />, <Comments />, <Users />
  ];
  const componentTitles = ['Our Posts', 'To Do List', 'Our Comments', 'Our Users'];
  const [page, setPage] = useState(0);
  const nextPage = () => {
    if (page + 1 === components.length) { setPage(0); }
    else { setPage(page + 1); }
  }
  const prevPage = () => {
    if (page === 0) { setPage(components.length - 1); }
    else { setPage(page - 1); }
  }
  return (<div className='App'>
    <h2 className='App__title'>{componentTitles[page]}</h2>
    <div className='App__content'>
      <i className="bi bi-arrow-left-circle-fill App__btn App__btn-prev" onClick={prevPage}></i>
      {components[page]}
      <i className="App__btn App__btn-prev bi bi-arrow-right-circle-fill " onClick={nextPage}></i>
    </div>
  </div>

  )
}

export default App
