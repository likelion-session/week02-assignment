import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부하기", completed: false },
    { id: 2, text: "과제 제출하기", completed: true },
  ]);

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo 리스트</h1>

      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setFilter("all")}>전체</button>
        <button onClick={() => setFilter("completed")}>완료</button>
        <button onClick={() => setFilter("active")}>미완료</button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id} style={{ marginTop: "10px" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                marginLeft: "8px",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;