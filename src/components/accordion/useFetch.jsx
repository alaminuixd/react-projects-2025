import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(null);
  const [faqs, setFaqs] = useState(null);
  const [faqId, setFaqId] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            setIsLoading(false);
            throw Error("Data fatching failed! Invalid URL.");
          }
          setIsLoading(true);
          return response.json();
        })
        .then((data) => {
          data.forEach((item) => (item.id = uuidv4()));
          setFaqs(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsErr(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, []);
  // handler functions
  const handleToggle = (id) => {
    setFaqId((faqID) => {
      return faqID === id ? null : id;
    });
    console.log(faqId);
  };
  return { isLoading, isErr, faqs, faqId, handleToggle };
}

export default useFetch;
