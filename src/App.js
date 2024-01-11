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
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos;
  const totalTodos;

  console.log('usuarios buscan ToDos: '+searchValue);

  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export default App;