import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { BsPencil } from 'react-icons/bs';

export default function TodoItem({
  todo,
  onCheck,
  onDelete: deleteItem,
  updateItem,
}) {
  TodoItem.propTypes = {
    todo: PropTypes.shape({
      item: PropTypes.string,
      id: PropTypes.string,
      complete: PropTypes.bool,
    }).isRequired,
    onCheck: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired,
  };

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('');

  const editMode = {
    display: 'none',
  };
  const viewMode = {};

  if (editing) {
    editMode.display = 'block';
    viewMode.display = 'none';
  } else {
    viewMode.display = 'flex';
    editMode.display = 'none';
  }

  const handleSetEdit = () => {
    setEditing(!editing);
    setTitle(todo.item);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const listenKeyDown = (e) => {
    if (e.key === 'Enter' && title.trim()) {
      updateItem(todo.id, title);
      setEditing(false);
    }
  };

  return (
    <li className="todo">
      <div className="edit" style={editMode}>
        <input type="text" value={title} onChange={handleChange} onKeyDown={listenKeyDown} />
      </div>
      <div className="view" style={viewMode}>
        <input type="checkbox" onChange={() => onCheck(todo?.id)} checked={todo.complete} />
        <span className={todo.complete ? 'strike-through' : ''}>{todo.item}</span>
        <BsPencil onClick={handleSetEdit} />
        <FaTrash onClick={() => deleteItem(todo?.id)} />
      </div>
    </li>
  );
}
