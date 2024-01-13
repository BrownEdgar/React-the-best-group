import React from 'react'

export default function Users({ list }) {
  return (
    <div className='Users'>
      {
        list.map(user => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>gender: {user.gender}</p>
            </div>
          )
        })
      }
    </div>
  )
}
