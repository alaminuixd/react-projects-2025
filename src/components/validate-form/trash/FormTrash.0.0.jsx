import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
// utility functions
const validateEmail = (data) => {
  return data.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};
// dummy data
const dummyData = {
  id: uuidv4(),
  fName: "Al Amin",
  lName: "Khan",
  email: "alamin@gmail.com",
  password: "Khan",
  confirmPassword: "Khan",
};
// main component start
function Form(props) {
  const [registerData, setRegisterData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userData, setUserData] = useState([dummyData]);
  // validation function
  const validateForm = () => {};
  // handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!registerData.fName.trim()) {
        throw new Error("First name is require!");
        return;
      }
      if (!registerData.lName.trim()) {
        throw new Error("Last name is required!");
        return;
      }
      if (!registerData.email.trim()) {
        throw new Error("Email is required!");
        return;
      }
      if (!validateEmail(registerData.email.trim())) {
        throw new Error("Please add a valid email address.");
        return;
      }
      if (!registerData.password.trim()) {
        throw new Error("Password is require!");
        return;
      }
      if (!registerData.confirmPassword.trim()) {
        throw new Error("Please confirm your password");
        return;
      }
      if (registerData.password.trim() !== registerData.confirmPassword) {
        throw new Error("Password does't match");
        return;
      }
      setIsLoading(false);
      // add id to the registerData object
      const newUserData = { ...registerData, id: uuidv4() };
      setUserData((prev) => {
        return [...prev, newUserData];
      });
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsSuccess(true);
      setIsError(null);
      setRegisterData({
        fName: "",
        lName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  useEffect(() => {
    console.log(userData);
  }, [userData]);
  return (
    <>
      <div className={props.container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            name="fName"
            placeholder="Your first name"
            value={registerData.fName}
            onChange={handleInputChange}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            name="lName"
            placeholder="Your last name"
            value={registerData.lName}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={registerData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={registerData.password}
            onChange={handleInputChange}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm the password"
            value={registerData.confirmPassword}
            onChange={handleInputChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="displayData">
        {isLoading && <p>{isLoading}</p>}
        {isError && <p>{isError}</p>}
        {isSuccess && <p>{isSuccess}</p>}
        {userData.length > 0 ? (
          userData.map((user) => {
            return (
              <div key={user.id}>
                <h3>Your Data</h3>
                <p>{user.fName}</p>
                <p>{user.lName}</p>
                <p>{user.email}</p>
                <p>{user.password}</p>
              </div>
            );
          })
        ) : (
          <h3>No data found</h3>
        )}
      </div>
    </>
  );
}

export default Form;
