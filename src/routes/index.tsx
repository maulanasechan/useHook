import ExampleWithUseState from "../page/useState";
import App from "../App";
import Login from "../page/login";
import ExampleWithUseReducer from "../page/useReducer";
import ExampleWithUseEffect from "../page/useEffect";
import ExampleWithUseRef from "../page/useRef";
import ExampleWithUseForm from "../page/useRef";

export const routers = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/exampleWithUseState",
    id: "Learn Use State",
    element: <ExampleWithUseState />,
  },
  {
    path: "/exampleWithUseReducer",
    id: "Learn Use Reducer",
    element: <ExampleWithUseReducer />,
  },
  {
    path: "/exampleWithUseEffect",
    id: "Learn Use Effect",
    element: <ExampleWithUseEffect />,
  },
  {
    path: "/exampleWithUseRef",
    id: "Learn Use Ref",
    element: <ExampleWithUseRef />,
  },
  {
    path: "/exampleWithUseForm",
    id: "Learn Use Form and Zod",
    element: <ExampleWithUseForm />,
  },
];
