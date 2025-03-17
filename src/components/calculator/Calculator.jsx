import React from "react";
import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [inputVal, setInputVal] = useState("");
  const display = (value) => {
    setInputVal((prev) => prev + value);
  };
  /* const calculate = () => {
    Check if the last character is an operator (+, -, *, /)
    const operators = "+-*\/";
    let cleanedInput = inputVal.trim();
    //Remove last character if it's an operator
    if (operators.includes(cleanedInput[cleanedInput.length - 1])) {
      cleanedInput = cleanedInput.slice(0, -1);
    }
    try {
      setInputVal((prev) => new Function(`return ${cleanedInput}`)());
    } catch {
      setInputVal("Error");
    }
  }; */

  const calculate = () => {
    // Regular expression to remove consecutive operators at the end of the string
    const cleanedInput = inputVal.trim().replace(/[+\-*/]+$/, "");

    if (!cleanedInput) {
      setInputVal("Error"); // Handle empty or invalid expression
      return;
    }

    try {
      // Evaluate the cleaned input
      setInputVal((prev) => new Function(`return ${cleanedInput}`)());
    } catch {
      // If there's an error, show "Error"
      setInputVal("Error");
    }
  };

  const clear = () => setInputVal("");
  return (
    <form className="calculator" name="calc">
      <input type="text" name="" className="value" value={inputVal} />
      <span className="num clear" onClick={() => clear()}>
        C
      </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}>
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("0")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span className="num equal" onClick={() => calculate()}>
        =
      </span>
    </form>
  );
}
