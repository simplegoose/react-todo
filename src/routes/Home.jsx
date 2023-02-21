import React from 'react';
import Header from '../components/Header';
import TodoLogic from '../components/TodoLogic';

export default function Home() {
  return (
    <div className="wrapper">
      <TodoLogic />
    </div>
  );
}
