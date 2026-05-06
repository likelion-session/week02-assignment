import React, {useState} from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(prevCount => prevCount+1);
  };

  const minus = () => {
    setCount(prevCount => prevCount-1);
  }

  const plusF = () => {
    setCount(prevCount => prevCount+5);
  }

  const minusF = () => {
    setCount(prevCount => prevCount-5);
  }

  const reset = () => {
    setCount(0);
  }

  const current = () => {
    alert(count);
  };

  return (
  <div>
    <h1>Count: <span style= {{ color: count < 0 ? 'red' : 'black' && count > 9 ? 'blue' : 'black' }}>{count}</span></h1>
    <button onClick={plus}>+1</button>
    <button onClick={minus}>-1</button>
    <button onClick={plusF}>+5</button>
    <button onClick={minusF}>-5</button>  
    <button onClick={reset}>리셋</button>
    <button onClick={current}>현재 카운트</button>
  </div>  
  );
}

export default Counter;
