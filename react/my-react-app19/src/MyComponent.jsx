// useState() = Re-renders the component when the state value changes.
//
//useRef() = "use Reference" Does not cause re-renders when its value changes.
//          When you want a component to "remember" some information,
//          but you don't want that information to trigger new renders.

// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

import React, { useState, useEffect, useRef } from "react";

function MyComponent() {
  //let [number, setNumber] = useState(0);
  const inpuRef1 = useRef(null);
  const inpuRef2 = useRef(null);
  const inpuRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  function handleClick1() {
    //setNumber((n) => n + 1);
    inpuRef1.current.focus();
    inpuRef1.current.style.backgroundColor = "yellow";
    inpuRef2.current.style.backgroundColor = "";
    inpuRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    //setNumber((n) => n + 1);
    inpuRef2.current.focus();
    inpuRef1.current.style.backgroundColor = "";
    inpuRef2.current.style.backgroundColor = "yellow";
    inpuRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    //setNumber((n) => n + 1);
    inpuRef3.current.focus();
    inpuRef1.current.style.backgroundColor = "";
    inpuRef2.current.style.backgroundColor = "";
    inpuRef3.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button onClick={handleClick1}>Click Me</button>
      <input ref={inpuRef1} />
      <br />

      <button onClick={handleClick2}>Click Me</button>
      <input ref={inpuRef2} />
      <br />

      <button onClick={handleClick3}>Click Me</button>
      <input ref={inpuRef3} />
    </div>
  );
}
export default MyComponent;
