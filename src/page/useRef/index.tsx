import React, { useRef, useState } from "react";

export default function ExampleWithUseRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const handleClick = () => {
    if (inputRef.current?.value) setValue(inputRef.current?.value || "");
    else inputRef.current?.focus();
  };

  //ref dynamically
  const buttonRef = useRef<Array<HTMLButtonElement | null>>([]);

  const loop = [{ id: 1 }, { id: 2 }];

  const handleClickDynamic = (data: number) => {
    const buttonElement = buttonRef.current[data];

    if (buttonElement) {
      if (buttonElement.style.background === "black") {
        buttonElement.style.background = "red";
      } else {
        buttonElement.style.background = "black";
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>Example With Use Ref</h1>
      <p>{value ? value : "Value Dari Input"}</p>
      <input type="text" ref={inputRef} placeholder="Ex..."></input>
      <button onClick={handleClick}>Submit</button>

      <h1>Example With Use Ref Dynamically</h1>
      {loop.map((l, i) => (
        <button
          key={i}
          style={{
            background: "black",
            color: "white",
          }}
          ref={(el) => (buttonRef.current[i] = el)}
          onClick={() => handleClickDynamic(i)}
        >
          Button {i + 1}
        </button>
      ))}
    </div>
  );
}
