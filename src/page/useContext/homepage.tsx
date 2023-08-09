import React, { useContext } from "react";
import { AppContext } from ".";
import { AppContextType } from "../../types/context";

export default function HomePage() {
  const { username } = useContext(AppContext) as AppContextType;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>Home Page</h1>
      <p>
        This is your username :{" "}
        <span style={{ fontWeight: "bold" }}>{username}</span>
      </p>
    </div>
  );
}
