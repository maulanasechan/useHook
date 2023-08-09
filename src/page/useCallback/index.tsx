/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import ChildComponent from "./child";

export default function ExampleWithUseCallback() {
  const [comments, setComments] = useState<string>("it is my comments");
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(() => {
    return comments;
  }, []);

  return (
    <div>
      <h1>Example With Use Memo</h1>
      <ChildComponent returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
}
