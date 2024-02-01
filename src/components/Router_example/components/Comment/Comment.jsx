import React from 'react'

export default function Comment({ comment }) {
  return (
    <div>
      <span>{comment.id}</span>
      <h2>{comment.name}</h2>
      <p>{comment.body}</p>
      <p className="email">
        {comment.email}
      </p>
    </div>
  )
}
