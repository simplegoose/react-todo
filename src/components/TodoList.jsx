import React from 'react';
import TodoItem from './TodoItem';
import { useAppContext } from '../hooks/context';

export default function TodoList() {
  const {
    todos: data,
    updateTodo,
    completeTodo,
    deleteTodo,
  } = useAppContext();

  return (
    <ul className="todo-list">
      {
        data
          .map((item) => (
            <TodoItem
              key={item?.id}
              todo={item}
              onCheck={completeTodo}
              updateItem={updateTodo}
              onDelete={deleteTodo}
            />
          ))
      }
    </ul>
  );
}
