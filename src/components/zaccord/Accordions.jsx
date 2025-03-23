import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import "./Accordions.css";
import { FaPlus } from "react-icons/fa6";

function Accordions() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [faqs, setFaqs] = useState(null);

  // load data
  const DATA_URL = "/json/accordionData.json";
  useEffect(() => {
    fetch(DATA_URL)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((faq) => (faq.id = uuidv4()));
        setFaqs(data);
        console.log(data);
      });
  }, []);
  /*   useEffect(() => {
    console.log(faqs);
  }, [faqs]); */
  return (
    <div className="container">
      <h1>Freequently Ask questions</h1>

      {Array.isArray(faqs) && faqs.length > 0 ? (
        faqs.map((faq) => {
          return (
            <div key={faq.id} className="faq-wrapper">
              <div className="faq">
                <div className="question">{faq && <p>{faq.question}</p>}</div>
                <span>
                  <FaPlus />
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <h2>No Todos found</h2>
      )}
    </div>
  );
}

export default Accordions;
