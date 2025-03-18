import React, { useEffect, useState } from "react";

import "./Testimonials.css";

const testimonialData = [
  {
    quote: "This is the best product I've ever used!",
    author: "Jane Doe",
  },
  {
    quote: "I highly recommend this product to everyone!",
    author: "John Smith",
  },
  {
    quote: "This product has completely changed my life!",
    author: "Bob Johnson",
  },
];
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    setTestimonials((prev) => [...prev, ...testimonialData]);
  }, []);

  // handler functions
  const handleClick = (e) => {
    setCurrentIndex((prev) => {
      if (e.target.dataset.action === "prev") {
        return prev > 0 ? prev - 1 : prev; // Prevent going below 0
      }
      if (e.target.dataset.action === "next") {
        return prev < testimonials.length - 1 ? prev + 1 : prev; // Prevent exceeding max index
      }
      return prev;
    });
  };

  return (
    <div className="testimonials">
      {testimonials.length > 0 ? (
        <>
          <div className="testimonials-quote">
            {testimonials[currentIndex].quote}
          </div>
          <div className="testimonials-author">
            {testimonials[currentIndex].author}
          </div>
        </>
      ) : (
        <h1>Not found</h1>
      )}
      <div className="testimonials-nav">
        <button data-action="prev" onClick={handleClick}>
          Prev
        </button>
        <button data-action="next" onClick={handleClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
