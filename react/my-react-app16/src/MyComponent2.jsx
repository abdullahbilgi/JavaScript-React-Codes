// useEffect) = React Hook that tells React DO SOME CODE WHEN (pick one):
//              This component re-renders
//              This component mounts
//              The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => (})
// Runs after every re-render
// Runs only on mount
// 3. useEffect(() =› (J, [value]) // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from "react";

function MyComponent2() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      //CLEANUP
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVE");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  window.addEventListener("resize", handleResize);
  console.log("EVENT LISTENER ADDED");

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Windows Width: {width}</p>
      <p>Windows Heigth: {height}</p>
    </>
  );
}
export default MyComponent2;
