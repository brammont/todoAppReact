import React from 'react'

function TodoCounter({total, completed}) {
  return (
    <h1>
      you have {completed} completed of {total} Task
    </h1>
  )
}

export default TodoCounter
