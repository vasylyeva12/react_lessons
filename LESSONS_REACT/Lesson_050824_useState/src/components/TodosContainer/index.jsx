import React, { useState } from "react";
import { todos } from "../../data/todos";
import TodoItem from "../TodoItem";
import s from "./index.module.css";

const TodosContainer = () => {
  const [todoList, setTodoList] = useState(todos);

  const changeStatus = (todo_id) => {
    // Найти карточку
    const target_todo = todoList.find((el) => el.id === todo_id);
    // Изменить  compleded на противоположное
    target_todo.completed = !target_todo.completed
    // Передать обновленное состояние в функцию, отслуживающую изменение состояние

    setTodoList([...todoList]) ;
  };

  const deleteTodo = (todo_id) => {
    setTodoList( todoList.filter(el => el.id !== todo_id))
   
  }
  return (
    <div className={s.container}>
      {todoList && todoList.map((el) => <TodoItem key={el.id} {...el}
      changeStatus={changeStatus} 
      deleteTodo={deleteTodo}/>)}
    </div>
  );
};

export default TodosContainer;
