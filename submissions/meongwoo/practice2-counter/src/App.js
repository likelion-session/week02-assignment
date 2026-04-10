import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  const increaseFive = () => setCount(count + 5);
  const decreaseFive = () => setCount(count - 5);

  let color = "black";
  if (count < 0) color = "red";
  else if (count >= 10) color = "blue";

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>

      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={reset}>Reset</button>

      <br /><br />

      <button onClick={increaseFive}>+5</button>
      <button onClick={decreaseFive}>-5</button>
    </div>
  );
}

export default Counter;