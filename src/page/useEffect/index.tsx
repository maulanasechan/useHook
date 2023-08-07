import React, { useEffect, useState } from "react";
import { useQueryPost, Post } from "./api";
import axios from "axios";

export default function ExampleWithUseEffect() {
  const [data, setData] = useState<Post[]>();
  const [count, setCount] = useState(0);

  const query = useQueryPost({
    options: {
      enabled: true,
    },
  });

  useEffect(() => {
    // setData(query.data);
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, [count]);

  return (
    <div>
      <h1>Example With Use State</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click Will Run UseEffect
      </button>

      {/* <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {data?.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div> */}
    </div>
  );
}
