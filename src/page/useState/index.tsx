import React, { useState } from "react";

export default function ExampleWithUseState() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("This Input Value");

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Example With Use State</h1>
      <p>{counter}</p>
      <button onClick={increment}>Increments</button>

      <p>{inputValue}</p>
      <input
        type="text"
        placeholder="Input something..."
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </div>
  );
}
