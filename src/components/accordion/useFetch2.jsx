import React, { useState, useEffect } from "react";

function useFetch2(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(null);
  const [faqs, setFaqs] = useState(null);
  const [faqId, setFaqId] = useState(null);
  // following useEffect will run once the browser render
  useEffect(() => {
    fetch(url).then((response) => {
      if (!response.ok) {
        setIsLoading(false);
        throw Error("Data fetching failed");
      }
    });
  });
  return <div>useFetch2</div>;
}

export default useFetch2;
