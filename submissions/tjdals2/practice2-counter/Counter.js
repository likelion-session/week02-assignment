import React,{useState} from "react";

function Counter(){
    const [count,setCount]=useState(0);

    function plus(){
        setCount(count+1)
    }
    function minus(){
        setCount(count-1)
    }
    function taechocity(){
        setCount(0)
    }
    function plus5(){
        setCount(count+5)
    }
    function minus5(){
        setCount(count-5)
    }

    return(
        <div>
            <h1><span style={{color:count<0 ? 'red': count>=10 ? 'blue' : 'black'}}>
                {count}</span></h1>
            <button onClick={minus}>-</button>
            <button onClick={plus}>+</button>
            <button onClick={taechocity}>초기화</button>
            <button onClick={plus5}>+5</button>
            <button onClick={minus5}>-5</button>
        </div>
    );
}
 export default Counter