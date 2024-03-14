import React from 'react'
import './TodoItem.css'

function TodoCounter({total, completed}) {
  return (
    <h1>
      you have {completed} completed of {total} Task
    </h1>
  )
}

export default TodoCounter
