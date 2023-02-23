import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useAppContext } from '../hooks/context';

export default function InputTodo() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const { addToDo } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      setTitle('');
      setMessage('');
      addToDo(title);
    } else {
      setMessage('Please edit title');
    }
  };

  const handleChange = (e) => {
    if (message) {
      setMessage('');
    }

    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="form">
        <input type="text" onChange={handleChange} value={title} />
        <button type="submit">
          <FaPlusCircle />
        </button>
      </div>
      {
        message
        && (
          <div className="alert">
            <span className="danger text-center">{message}</span>
          </div>
        )
      }
    </form>
  );
}
