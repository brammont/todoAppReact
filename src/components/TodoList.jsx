import React from 'react'
import './TodoList.css';

function TodoList(props) {
  return (
    <ul>{props.children}</ul>
  )
}

export default TodoList

