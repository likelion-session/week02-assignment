import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    
    // print
    function showCounter() { <p>Count: {count}</p> }

    // calc
    function incCounter() { setCount(count => count + 1); }
    function decCounter() { setCount(count => count - 1); }

    // reset
    function resetCounter() { setCount(0); }

    return (
        <div>
            
        </div>
    );
}

export default Counter;