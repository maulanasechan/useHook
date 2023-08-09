import React, { useContext, useRef } from "react";
import { AppContext } from "./index";
import { AppContextType } from "../../types/context";

export default function LoginPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setUsername } = useContext(AppContext) as AppContextType;

  const handleClick = () => {
    if (inputRef.current) {
      setUsername(inputRef.current?.value);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>Login Page</h1>
      <input type="username" placeholder="Username" ref={inputRef} />
      <button onClick={handleClick}>Sign In</button>
    </div>
  );
}
