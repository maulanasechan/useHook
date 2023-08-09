/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

export type comment = {
  id: string;
  postId: string;
  name: string;
  email: string;
  body: string;
};

export default function ExampleWithUseMemo() {
  const [comments, setComments] = useState<comment[]>();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setComments(res.data);
    });
  }, []);

  const findLongestName = (data: comment[] | undefined) => {
    let longest = "";
    if (data) {
      data.forEach((e) => {
        if (longest.length < e.name.length) {
          longest = e.name;
        }
      });
    }
    console.log("this is the longest");
    return longest;
  };

  const getLongestName = useMemo(() => findLongestName(comments), [comments]);

  return (
    <div>
      <h1>Example With Use Memo</h1>
      {/* <p>{findLongestName(comments)}</p> */}
      <h2>{getLongestName}</h2>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
}
