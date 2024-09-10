import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Todo from "./components/ToDo/Todo";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
      id: "1",
      label: "Hello world !!!",
      tags: [
          {
              id: "1",
              name: "#tag-1"
          },
          {
              id: "2",
              name: "#tag-2"
          },
      ]
  },
  {
      id: "2",
      label: "Todo 2",
      tags: [
          {
              id: "1",
              name: "#tag-1"
          }
      ]
  }
];

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodosg] = useState([])
  const [note, setNote] = useState("");
  const [todoTag, setTodoTag] = useState('')
  

  useEffect(() => {
    setTodos(data);
  }, []);

  const handleChangeInput = (e) => setNote(e.target.value);

  const handleCreateTodo = () => {
    let todo = {
      id: uuidv4(),
      label: note,
      tags: [],
    };

    setTodos([...todos, todo]);
    setNote("");
  };

  const handleRemoveTodo = (todoId) => {
    setTodos(todos.filter(item => item.id !== todoId))
  }
  
  const handleRemoveTodoAll = () => {
    setTodos([])
  }
  const handleSearchTag = (e) => {
    setTodoTag(e.target.value)
  }

  useEffect( () => {
    // .tags.filter(tag => tag.name.toLowerCase().indexOf(todoTag.toLowerCase()) !== -1)
    setFilteredTodosg(todos.filter(todo => todo))

  },[todoTag])

  return (
    <div className="todo-app">
      <div className="todo-app__left">
        <div className="form">
          <div className="form__item">
            <label htmlFor="search" className="form-label">
              Search:
            </label>
            <div className="search">
              <input
                type="text"
                id="search"
                className="form-control"
                placeholder="Search by tag..."
                value={todoTag}
                onChange={handleSearchTag}
              />
              <AiOutlineClose className="search__icon" />
            </div>
          </div>

          <div className="form__item">
            <label htmlFor="note" className="form-label">
              Add Note:
            </label>
            <input
              onChange={handleChangeInput}
              type="text"
              id="note"
              name="note"
              className="form-control"
              placeholder="Add tags using # symbol"
              value={note}
            />
            <button className="btn" onClick={handleCreateTodo}>Add</button>
          </div>

          <button 
          className="btn"
          onClick={handleRemoveTodoAll}>Delete all notes
          </button>
        </div>
      </div>

      <div className="todo-app__right">
        <div className="notes">
          <h2 className="notes__title">Notes List</h2>

          <div className="notes__content">
            {todos &&
              todos.map((item, index) => (
                <Todo key={item.id} 
                item={item} 
                index={index + 1} 
                removeTodo={ () => handleRemoveTodo(item.id) } />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
