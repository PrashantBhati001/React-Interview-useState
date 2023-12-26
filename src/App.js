import './App.css';
import {useState} from 'react';

function App() {

  const [count,setCount]=useState(0)

  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
  }
  return (
    <div className="App">
    <h1>Counter</h1>
    <div>{count}</div>
    <button onClick={()=>{increment()}}>+</button>
    <button onClick={()=>{decrement()}}>-</button>
    </div>
  );
}

export default App;
