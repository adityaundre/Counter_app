import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';

function App() {
const[value,setValue]=useState(0)
const[increment,setIncrement]=useState(0);
const[decrement,setDecrement]=useState(0);

const increase=()=>{
  setValue(value+1);

}
const decrease=()=>{
  setValue(value-1)
}

  return (
    <div className="App">
      <h2>Counter App</h2>
      <p>Count: {value}</p>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>decrement</button>

    </div>
  );
}

export default App;
