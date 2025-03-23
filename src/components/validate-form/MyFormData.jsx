import React, { useEffect, useState } from "react";
import "./MainForm.css";
function MyFormData() {
  function search(formData) {
    const fName = formData.get("firstName");
    const lName = formData.get("lastName");
    const father = formData.get("father");
    const dataArray = { fName, lName, father };
    setFormData((prev) => {
      return [...prev, dataArray];
    });
  }
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="container">
      <form action={search}>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="text" name="father" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default MyFormData;
