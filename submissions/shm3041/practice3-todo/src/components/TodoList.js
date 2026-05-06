import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("all");

    // TODO 추가
    const handleAdd = () => {
        if (input.trim() === "") return;
        const newId = todos.length + 1;
        setTodos([...todos, { id: newId, text: input, completed: false }]);
        setInput("");
    }

    // TODO 삭제
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    // completed 상태 변경
    const handleToggle = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }

    // 완료 여부에 따른 
    const filteredTodos = todos.filter(todo => {
        if (filter === "completed") return todo.completed;
        if (filter === "active") return !todo.completed;
        return true;
    });

    return(
        <div>
            <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="TODO 입력"
            />
            <button onClick={handleAdd}>추가</button>
            
            <div>
                <button onClick={() => setFilter("all")}>전체</button>
                <button onClick={() => setFilter("completed")}>완료</button>
                <button onClick={() => setFilter("active")}>미완료</button>
            </div>
            
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        <input 
                            type="checkbox" 
                            checked={todo.completed}
                            onChange={() => handleToggle(todo.id)}
                        />
                        {todo.text}
                        <button onClick={() => handleDelete(todo.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;