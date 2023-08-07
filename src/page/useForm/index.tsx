import React, { useRef, useState } from "react";

export default function ExampleWithUseRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const handleClick = () => {
    if (inputRef.current?.value) setValue(inputRef.current?.value || "");
    else inputRef.current?.focus();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>Example With Use Ref</h1>
      <p>{value ? value : "Value Dari Input"}</p>
      <input type="text" ref={inputRef} placeholder="Ex..."></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
