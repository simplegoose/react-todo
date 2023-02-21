import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TodoApp from './components/TodoApp';
import ContextProvider from './hooks/context';
import './sass/index.scss';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <TodoApp />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
