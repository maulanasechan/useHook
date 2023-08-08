import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function ExampleWithUseLayout() {
  const inputRef = useRef<HTMLInputElement>(null);
  const pRef = useRef<Array<HTMLParagraphElement | null>>([]);
  const [inputValue, setInputValue] = useState("useLayout");

  useLayoutEffect(() => {
    if (pRef.current[1]) {
      pRef.current[1].textContent = inputValue;
    }
  }, []);

  useEffect(() => {
    if (inputRef.current && pRef.current[2]) {
      inputRef.current.value = "useEffect";
      setInputValue(inputRef.current.value);
      pRef.current[2].textContent = inputRef.current.value;
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>Example With Use Layout</h1>
      <h2>Use Layout Value</h2>
      <p ref={(el) => (pRef.current[1] = el)}></p>
      <h2>Use Effect Value</h2>
      <p ref={(el) => (pRef.current[2] = el)}></p>
      <input
        type="text"
        ref={inputRef}
        placeholder="Ex..."
        value={inputValue}
      ></input>
    </div>
  );
}
