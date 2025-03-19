import React, { useEffect, useRef, useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./Accordion.module.css";
function Accordion({ id, question, answer, onToggle, isOpen }) {
  const answerRef = useRef(null);
  const [height, setHeight] = useState("0px");
  useEffect(() => {
    if (isOpen) {
      setHeight(`${answerRef.current.scrollHeight}px`);
    } else {
      setHeight(`${answerRef.current.scrollHeight}px`);
      setTimeout(() => {
        setHeight("0px");
      }, 0);
    }
  }, [isOpen]);
  return (
    <div
      className={
        isOpen ? `${styles["faq"]} ${styles["faq-opened"]}` : styles["faq"]
      }
    >
      <div className={styles["question"]}>
        {question && <h3>{question}</h3>}
        <button onClick={onToggle}>{isOpen ? <FaMinus /> : <FaPlus />}</button>
      </div>
      <div
        ref={answerRef}
        style={{
          height: height,
          overflow: "hidden",
          transition: "height .2s ease-out",
        }}
      >
        {isOpen && answer && <p>{answer}</p>}
      </div>
    </div>
  );
}

export default Accordion;
