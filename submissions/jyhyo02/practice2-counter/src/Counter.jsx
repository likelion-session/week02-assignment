import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };

    const increaseFive = () => {
        setCount(count + 5);
    };

    const decreaseFive = () => {
        setCount(count - 5);
    };

    const reset = () => {
        setCount(0);
    };

    const countColor = count < 0 ? 'red' : count >= 10 ? 'blue' : 'black';
    
    return (
        <div>
            <h1>
                Count: <span style={{ color: countColor }}>{count}</span>
            </h1>
            <button onClick={increase}>
                Increase
            </button>
            <button onClick={increaseFive}>
                +5 Increase
            </button>
            <button onClick={decreaseFive}>
                -5 Decrease
            </button>
            <button onClick={decrease}>
                Decrease
            </button>
            <button onClick={reset}>
                Reset
            </button>
        </div>
    );
}

export default Counter;