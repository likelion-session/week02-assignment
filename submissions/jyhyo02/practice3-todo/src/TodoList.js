import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: '리액트 공부하기', completed: false },
        { id: 2, text: '과제 제출하기', completed: false },
        { id: 3, text: '밥먹기', completed: false },
        { id: 4, text: '운동하기', completed: false }
    ]);
    
    const [inputText, setInputText] = useState('');
    const [filter, setFilter] = useState('all');

    const addTodo = () => {
        const trimmedText = inputText.trim();

        if (!trimmedText) {
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: trimmedText,
            completed: false
        };

        setTodos([...todos, newTodo]);
        setInputText('');
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
        if (filter === 'completed') {
            return todo.completed;
        }

        if (filter === 'active') {
            return !todo.completed;
        }

        return true;
    });

    return (
        <div>
            <h1>Todo 리스트</h1>
            <div>
                <input
                    type="text"
                    value={inputText}
                    placeholder="할 일을 입력하세요"
                    onChange={(event) => setInputText(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            addTodo();
                        }
                    }}
                />
                <button onClick={addTodo}>추가</button>
            </div>

            <div>
                <button onClick={() => setFilter('all')}>전체</button>
                <button onClick={() => setFilter('completed')}>완료</button>
                <button onClick={() => setFilter('active')}>미완료</button>
            </div>

            <ul>
                {filteredTodos.map((todo) => (
                    <li
                        key={todo.id}
                    >
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.text}
                            </span>
                        </label>
                        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;