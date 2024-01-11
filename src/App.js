import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed : true},
  { text: 'Tomar el Curso de Intro a React.js', completed : false},
  { text: 'Llorar por la llorona', completed : false},
  { text: 'LALALA', completed : false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;