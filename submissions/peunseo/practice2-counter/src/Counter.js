import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () => setCount((prevCount) => prevCount - 1);
  const handleIncrementFive = () => setCount((prevCount) => prevCount + 5);
  const handleDecrementFive = () => setCount((prevCount) => prevCount - 5);
  const handleReset = () => setCount(0);

  return (
    <div>
      <h1>
        Count: <span style={{ color: count < 0 ? 'red' : count >= 10 ? 'blue' : 'black' }}>{count}</span>
      </h1>

      <button type="button" onClick={handleDecrementFive}>-5</button>
      <button type="button" onClick={handleDecrement}>-1</button>
      <button type="button" onClick={handleReset}>Reset</button>
      <button type="button" onClick={handleIncrement}>+1</button>
      <button type="button" onClick={handleIncrementFive}>+5</button>
    </div>
  );
}

export default Counter;