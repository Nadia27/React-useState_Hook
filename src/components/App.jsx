import React, { useState } from "react";

function App() {
  //State outputs an array [initial state, =>]
  // could use destructing to assign a name to array values
  const [count, setCount] = useState(90);

  function increase() {
    setCount(10);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

// Destructing - destructure a complex structure
// Objects and arrays

// const rgb = [46, 204, 113];

// // To access value in the array
// console.log(rgb[2]); // bad code

// // Destructure example
// // instead use name inside  []

// const [red, green, blue] = [231, 76, 60];

// // varible names will be mapped to corresponding values
// console.log(green); // 76
