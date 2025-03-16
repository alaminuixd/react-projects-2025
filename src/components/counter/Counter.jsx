import React, { useState } from "react";

import "../../style.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>
      <div className="btns-container">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="increment"
        >
          +
        </button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="increment"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
