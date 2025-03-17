import React from "react";

import "./ToggleBackgroundColor.css";
import { useState } from "react";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");
  console.log(backgroundColor);
  // handler functions
  const handleClick = () => {
    setBackgroundColor((bgColor) =>
      bgColor === "white" ? "#1b1b1b" : "white"
    );
    setTextColor((textColor) =>
      textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b"
    );
    setButtonStyle((bgColor) => (bgColor === "white" ? "#1b1b1b" : "white"));
  };
  return (
    <div style={{ backgroundColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor === "#1b1b1b" ? "Change To White" : "Change To Black"}
      </button>
      <section className="content">
        <h1>
          Welcome to <br />
          our website
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
