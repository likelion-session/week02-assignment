import React,{useState} from "react";
import './TodoList.css'

function TodoList(){
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue]=useState('');

    const handleAddTodo = ()=>{
        const newTodo={
            id: Date.now(),
            text: inputValue,
            completed:false
        };
        setTodos([...todos,newTodo]);
        setInputValue('');
    }

    const handleDeleteTodo=(id)=>{
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleToggleComplete=(id)=>{
        const updatedTodos=todos.map(todo=>{
            if(todo.id === id){
                return {...todo,completed: ! todo.completed};
            }
            return todo;
        });
        setTodos(updatedTodos)
    }

    return(
        <div>
            <h2>Todo List</h2>
            <div>
                <input 
                type="text" 
                value={inputValue} 
                onChange={(event)=>setInputValue(event.target.value)}
                ></input>
                <button onClick={handleAddTodo}>추가</button>
            </div>

            <ol>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={()=>handleToggleComplete(todo.id)}></input>

                        <span className={todo.completed? "delete_line":""}>{todo.text}</span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
                    </li>
                ))}
            </ol>
            
        </div>
    );
}
 export default TodoList;