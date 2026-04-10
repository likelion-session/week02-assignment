import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '끝내주게 숨쉬기', completed: false },
    { id: 2, text: '간지나게 자기', completed: false },
    { id: 3, text: '작살나게 밥먹기', completed: false }
  ]);

  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    const trimmedText = text.trim();

    if (!trimmedText) {
        return;
    }

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setText('');
  };

  const delTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') {
        return !todo.completed;
    }

    if (filter === 'completed') {
        return todo.completed;
    }

    return true;
  });

  return (
    <div>
      <h2>Todo List</h2>
      
      <div>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>

      <div>
        <button onClick={() => setFilter('all')}>전체</button>
        <button onClick={() => setFilter('active')}>미완료</button>
        <button onClick={() => setFilter('completed')}>완료</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            
            <input
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleTodo(todo.id)} 
            />

            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            
            <button onClick={() => delTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;