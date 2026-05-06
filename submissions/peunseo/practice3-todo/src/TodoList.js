import { useState } from 'react';

function TodoList() {
  // 목록, 입력, 필터 
  const [todos, setTodos] = useState([
    { id: 1, text: '3대 500', completed: false },
    { id: 2, text: '멋사 2주차 과제', completed: true },
  ]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  // 입력하면 목록 추가
  const handleAddTodo = (event) => {
    event.preventDefault(); //입력할 때 새로고침 방지
    const trimmedText = input.trim(); // 입력할 때 앞뒤 공백 제거

    if (!trimmedText) {return;} // 빈 문자열은 꺼지쇼

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(), // 목록당 id 부여해주고
        text: trimmedText, // 위에서 입력 받은 텍스트
        completed: false, // 추가됐으니까 당연히 미완료 상태로 시작
      },
    ]);
    setInput(''); // 다시 입력창 비워줘서 다음 입력 받을 수 있게
  };

  // 삭제에 하려는 id 받기 > 그 외 목록만 남기기 (특이하노.. 제거가 아니고 필터링)
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 체크하면 완료 토글
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) => { // 전체 목록 돌면서
        if (todo.id === id) { // 해당 id
          return { ...todo, completed: !todo.completed }; // 상태 반전
        }
        return todo;
      })
    );
  };

  // 필터에 따라 나타낼 목록 필터링 
  let filteredTodos = todos;
  if (filter === 'completed') { // 완료 목록만 보이게
    filteredTodos = todos.filter((todo) => todo.completed === true);
  }
  if (filter === 'active') { // 미완료 목록만 보이게
    filteredTodos = todos.filter((todo) => todo.completed === false);
  }

  // UI
  return (
    <section className="todo-card">
      {/* 제목 */}  
      <h1 className="todo-title">Todo 리스트</h1>

      {/* Todo 입력 부분 */}
      <form className="todo-form" onSubmit={handleAddTodo}>
        <input
          className="todo-input"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="니 뭐 해야 하는데"
          aria-label="새 Todo"
        />
        <button className="todo-add-button" type="submit">
          추가
        </button>
      </form>

      {/* 전체 / 완료 / 미완료 필터 버튼 */}
      <div className="todo-filters" role="group" aria-label="Todo 필터">
        <button
          type="button"
          className={`todo-filter ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          전체
        </button>
        <button
          type="button"
          className={`todo-filter ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          완료
        </button>
        <button
          type="button"
          className={`todo-filter ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          미완료
        </button>
      </div>

      {/* 아래 추가한 Todo 목록 */}
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li className="todo-item" key={todo.id}> 
            <label className="todo-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            </label>

            <button
              className="todo-delete-button"
              type="button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;