import React, { useState } from "react";

import "./HiddenSearchBar.css";
import { FaSearch } from "react-icons/fa";
function HiddenSearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  // handler functoins
  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#ffffff");
    }
  };
  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" name="" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
}

export default HiddenSearchBar;
