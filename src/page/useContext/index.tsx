import React, { createContext, useState } from "react";
import LoginPage from "./login";
import HomePage from "./homepage";
import { AppContextType } from "../../types/context";

export const AppContext = createContext<AppContextType | null>(null);

export default function ExampleWithUseContext() {
  const [username, setUsername] = useState("");

  const contextValue = {
    username: username,
    setUsername: setUsername,
  };

  return (
    // <AppContext.Provider value={{ username, setUsername }}>
    <AppContext.Provider value={contextValue}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h1>Example With Use Context</h1>
        <LoginPage />
        <HomePage />
      </div>
    </AppContext.Provider>
  );
}
