import { useEffect } from "react";

export default function ChildComponent({
  returnComment,
}: {
  returnComment: () => string;
}) {
  useEffect(() => {
    console.log("function Called");
  }, [returnComment]);

  return (
    <div>
      <p>{returnComment()}</p>
    </div>
  );
}
