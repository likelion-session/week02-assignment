import { useState } from "react";
function TodoList(){
    const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', completed: false },
    { id: 2, text: '과제 제출하기', completed: true }
    ]);

    const [text, setText] = useState('');
    const [filter, setFilter] = useState('all');

    const createTodos = () => {
        const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        setTodos(prevTodos => [...prevTodos, {
            id: nextId,
            text: text,
            completed: false
        }])

        setText('');
    }
    
    const deleteTodos = (todoId) => {
        setTodos(prevTodos => 
            prevTodos.filter(todos => todos.id !== todoId)
        )
    }

    const toggleTodo = (todoId) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === todoId
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        )
    }

    const todoFilter = todos.filter(todo => {
        if (filter === "completed") return todo.completed === true;
        else if (filter === "incompleted") return todo.completed === false;
        else return true;
    })

    return (
        <div>
            <h1>TodoList</h1>
            <input value={text} onChange={(e) => setText(e.target.value)} /> 
            <button onClick={createTodos}>추가</button> <br />

            <h2>- 목록 -</h2> 
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">전체</option>
                <option value="completed">완료</option>
                <option value="incompleted">미완료</option>
            </select>

            {todoFilter.map((todo) => (
                <p key={todo.id}>
                    <input type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    /> 
                    
                    {todo.completed ? <del>{todo.text}</del> : todo.text}{" "} 
                    <button onClick={() => deleteTodos(todo.id)}>삭제</button>
                </p>
            ))}
        </div>
    );
}

export default TodoList