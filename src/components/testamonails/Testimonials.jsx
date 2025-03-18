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
  const handlePrevClick = (e) => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  //setCurrentIndex((currentIndex + testimonials.length -1) % testimonials.length);
  const handleNextClick = (e) => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
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
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
