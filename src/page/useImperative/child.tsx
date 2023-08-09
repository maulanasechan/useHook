import { forwardRef, useImperativeHandle, useState } from "react";
import { ChildRef } from ".";

const ChildComponent = forwardRef<ChildRef>((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleButton() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Button FROM Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default ChildComponent;
