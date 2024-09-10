import React from 'react'
import s from './index.module.css'
import { IoMdClose } from "react-icons/io";

const TodoItem = ( {id, todo, completed, changeStatus, deleteTodo}) => {

    const card_styles = {
        backgroundColor: completed ? 'lightgreen' : 'lightgray'
    }
  return (
    <div 
    className={s.item} 
    style={card_styles}
    // onClick={ () => changeStatus(id)}
    >
        <IoMdClose  onClick={ () => deleteTodo(id)} />
        <p>{ todo }</p>
    </div>
  )
}

export default TodoItem