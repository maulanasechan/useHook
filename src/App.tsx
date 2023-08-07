import { routers } from "./routes";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn Use Hooks</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {routers.map((e) => (
            <a className="App-link" href={e.path} rel="noopener noreferrer">
              {e.id}
            </a>
          ))}
        </div>
      </header>
    </div>
  );
}
