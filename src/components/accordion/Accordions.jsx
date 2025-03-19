import React, { useEffect, useState } from "react";

import styles from "./Accordions.module.css";

import Accordion from "./Accordion";
import useFetch from "./useFetch";
function Accordions() {
  const { isLoading, isErr, faqs, faqId, handleToggle } = useFetch(
    "/json/accordionData.json"
  );
  return (
    <div className={styles["home-container"]}>
      {isLoading && <p>Data is loading...</p>}
      {isErr && <p>{isErr}</p>}
      {faqs &&
        faqs.map((faq) => {
          return (
            <Accordion
              key={faq.id}
              {...faq}
              onToggle={() => handleToggle(faq.id)}
              isOpen={faq.id === faqId}
            />
          );
        })}
    </div>
  );
}

export default Accordions;
