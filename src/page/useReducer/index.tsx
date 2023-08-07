import { useReducer, useState } from "react";

interface State {
  number: number;
  hide: boolean;
}

type Action = { type: "INCREMENT" } | { type: "HIDDEN" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + 1, hide: state.hide };
    case "HIDDEN":
      return { number: state.number, hide: !state.hide };
    default:
      return state;
  }
};

export default function ExampleWithUseReducer() {
  const [state, dispatch] = useReducer(reducer, { number: 0, hide: true });

  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  const [newState, setNewState] = useState({
    page: 0,
    show: false,
  });

  const handleClick = () => {
    setCount(count + 1);
    setShowText(!showText);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Example With Use State</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Increments
      </button>
      {showText && <p>Show This Text</p>}

      <h1>Example With Use Reducer</h1>
      <h1>{state.number}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "HIDDEN" });
        }}
      >
        Click Here
      </button>

      {state.hide && <p>This is a text</p>}

      <h1>Example With Use State Array</h1>
      <p>{newState.page}</p>
      <button
        onClick={() => {
          // setNewState((prevState) => ({
          //   ...prevState,
          //   page: prevState.page + 1,
          // }));
          setNewState((prevState) => ({
            show: !prevState.show,
            page: prevState.page + 1,
          }));
        }}
      >
        Increments
      </button>
      {newState.show && <p>Show This Text</p>}
    </div>
  );
}
