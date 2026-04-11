import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    // calc (이전 state값에 연산)
    const addCounter = (num) => { setCount(prev => prev + num); }
    const subCounter = (num) => { setCount(prev => prev - num); }
    
    // reset
    const resetCounter = () => { setCount(0); }

    // color
    const color = (count < 0) ? "red" : (count >= 10 ? "blue" : "black");

    return (
        <div>
            <span style={{color}}>
                <p>Count: {count}</p>
            </span>

            <button onClick={() => addCounter(1)}>Counter +1</button>
            <button onClick={() => subCounter(1)}>Counter -1</button>
            <button onClick={resetCounter}>Reset Counter</button>
            <button onClick={() => addCounter(5)}>Count +5</button>
            <button onClick={() => subCounter(5)}>Count -5</button>
        </div>
    );
}

export default Counter;