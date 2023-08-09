import ExampleWithUseState from "../page/useState";
import App from "../App";
import Login from "../page/login";
import ExampleWithUseReducer from "../page/useReducer";
import ExampleWithUseEffect from "../page/useEffect";
import ExampleWithUseRef from "../page/useRef";
import ExampleWithUseForm from "../page/useForm";
import ExampleWithUseLayout from "../page/useLayout";
import ExampleWithUseImperative from "../page/useImperative";
import ExampleWithUseContext from "../page/useContext";
import ExampleWithUseMemo from "../page/useMemo";
import ExampleWithUseCallback from "../page/useCallback";

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
    path: "/exampleWithUseLayout",
    id: "Learn Use Layout",
    element: <ExampleWithUseLayout />,
  },
  {
    path: "/exampleWithUseImperative",
    id: "Learn Use Imperative",
    element: <ExampleWithUseImperative />,
  },
  {
    path: "/exampleWithUseContext",
    id: "Learn Use Context",
    element: <ExampleWithUseContext />,
  },
  {
    path: "/exampleWithUseMemo",
    id: "Learn Use Memo",
    element: <ExampleWithUseMemo />,
  },
  {
    path: "/exampleWithUseCallback",
    id: "Learn Use Callback",
    element: <ExampleWithUseCallback />,
  },
  {
    path: "/exampleWithUseForm",
    id: "Learn Use Form and Zod",
    element: <ExampleWithUseForm />,
  },
];
