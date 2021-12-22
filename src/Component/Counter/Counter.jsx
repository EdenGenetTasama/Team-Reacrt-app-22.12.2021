import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("NAME");


  function UpInOne() {
    setCounter(counter+1);
  }

  function downInOne() {
    setCounter(counter-1);
  }

  function resetToZero(){
    setCounter(0)
  }

  function showName(){
    setName("Eden")
  }


  return (
    <div>
      <h1>This is Counter Component</h1>
      <p>{counter}</p>
      <p>{name}</p>

      <button onClick={UpInOne}> +</button>
      <button onClick={downInOne}> - </button>
      <button onClick={resetToZero}> 0 </button>

      <button onClick={showName}>
          Show Name
      </button>
    </div>
  );
}

export default Counter;
