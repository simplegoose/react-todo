import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = React.createContext();

export const useAppContext = () => useContext(TodoContext);

const ContextProvider = ({ children }) => {
  ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const saveToStorage = (data) => {
    window.localStorage.setItem('react_todos', JSON.stringify(data));
  };

  const getFromStorage = () => {
    const data = JSON.parse(window.localStorage.getItem('react_todos'));
    const parsed = data !== null ? data : [];

    return parsed;
  };

  const [todos, setTodos] = useState(getFromStorage());

  const updateTodo = (id, title) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.item = title;
    setTodos([...todos]);
    saveToStorage([...todos]);
  };

  const completeTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos([...todos]);
    saveToStorage([...todos]);
  };

  const addToDo = (title) => {
    const todo = {
      item: title,
      id: uuidv4(),
      complete: false,
    };

    setTodos([...todos, todo]);
    saveToStorage([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);

    setTodos([...filtered]);
    saveToStorage([...filtered]);
  };

  return (
    <TodoContext.Provider value={{
      addToDo,
      updateTodo,
      completeTodo,
      deleteTodo,
      todos,
    }}
    >
      { children }
    </TodoContext.Provider>
  );
};

export default ContextProvider;
