import React from 'react'
import s from './index.module.css'
import { IoMdClose } from "react-icons/io";

const TodoItem = ( {id, todo, completed, changeStatus, deleteTodo}) => {

    const card_styles = {
        backgroundColor: completed ? 'lightgreen' : 'lightgray'
    }

    const delete_todo = (event) => {
      event.stopPropagation()
      deleteTodo(id)
    }
  return (
    <div 
    className={s.item} 
    style={card_styles}
    onClick={ () => changeStatus(id)}
    >
        <IoMdClose  onClick={delete_todo} />
        <p>{ todo }</p>
    </div>
  )
}

export default TodoItem