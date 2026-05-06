import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    function Plus(num){ setCount(prevCount => prevCount + num); }
    function Minus(num){ setCount(prevCount => prevCount - num); }
    function Reset(){ setCount(0); }

    return (
        <div>
            <h1>현재 Count: <span style={{ color: count < 0 ? 'blue' : count > 10 ? 'red' : 'black' }}>{count}</span></h1>
            <button onClick={() => Plus(1)}>+1</button>
            <button onClick={() => Minus(1)}>-1</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={() => Plus(5)}>+5</button>
            <button onClick={() => Minus(5)}>-5</button>
        </div>
    );
}

export default Counter
