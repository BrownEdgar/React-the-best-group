import { useState } from 'react'

import   "./App.scss";

export default function App() {
  const [users, setUsers] = useState([
    {
      id:1,
      name:'Leanne Grahm',
      history:'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'
    },
    {
      id:2,
      name:'Ervin Howell',
      history:'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
    },
    {
      id:3,
      name:'Clementine Bauch',
      history:'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
    },
    {
      id:4,
      name:'Patricia Lebsack',
      history:"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }

  ])
  const deleteUse= (id) => {
    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers)
  }

  return (
    <div>
      <div className='Users' >
        <h1>Blog page</h1>
        {
          users.map(user => {
            return (
              <div className='Users___name' key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.history}</p>
                <button onClick={() => deleteUse(user.id)}>Delete user</button>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}
