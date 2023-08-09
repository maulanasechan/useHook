import React, { useRef } from "react";
import ChildComponent from "./child";

export type ChildRef = {
  toggleButton: () => void;
};

export default function ExampleWithUseImperative() {
  const buttonRef = useRef<ChildRef | null>(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>Example With Use Imperative Handle</h1>
      <button
        onClick={() => {
          buttonRef.current?.toggleButton();
        }}
      >
        button FROM parent
      </button>
      <ChildComponent ref={buttonRef} />
    </div>
  );
}
