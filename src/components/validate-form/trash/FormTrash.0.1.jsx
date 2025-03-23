import React, { useState, useEffect, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

// Utility function for email validation
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Dummy user data
const useDummyData = () => {
  console.log("dummy data");
  return {
    id: uuidv4(),
    fName: "Al Amin",
    lName: "Khan",
    email: "alamin@gmail.com",
    password: "Khan",
  };
};

function Form({ container }) {
  const dummyData = useDummyData();
  const [registerData, setRegisterData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [userData, setUserData] = useState([dummyData]);

  // Handle input change
  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Form validation function
  const validateForm = () => {
    const { fName, lName, email, password, confirmPassword } = registerData;

    if (!fName.trim()) return "First name is required!";
    if (!lName.trim()) return "Last name is required!";
    if (!email.trim()) return "Email is required!";
    if (!validateEmail(email.trim())) return "Invalid email address!";
    if (!password.trim()) return "Password is required!";
    if (!confirmPassword.trim()) return "Please confirm your password!";
    if (password !== confirmPassword) return "Passwords do not match!";

    return null;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const error = validateForm();
    if (error) {
      setMessage(error);
      setIsLoading(false);
      return;
    }

    const newUser = { ...registerData, id: uuidv4() };
    setUserData((prev) => [...prev, newUser]);

    setRegisterData({
      fName: "",
      lName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setMessage("Registration successful!");
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className={container}>
      <form onSubmit={handleSubmit}>
        {["fName", "lName", "email", "password", "confirmPassword"].map(
          (field) => (
            <div key={field}>
              <label htmlFor={field}>
                {field === "fName"
                  ? "First Name"
                  : field === "lName"
                  ? "Last Name"
                  : field === "confirmPassword"
                  ? "Confirm Password"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field.includes("password") ? "password" : "text"}
                name={field}
                placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                value={registerData[field]}
                onChange={handleInputChange}
              />
            </div>
          )
        )}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Processing..." : "Sign Up"}
        </button>
      </form>

      {message && <p>{message}</p>}

      <div className="displayData">
        {userData.length > 0 ? (
          userData.map(({ id, fName, lName, email, password }) => (
            <div key={id}>
              <h3>Your Data</h3>
              <p>{fName}</p>
              <p>{lName}</p>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          ))
        ) : (
          <h3>No data found</h3>
        )}
      </div>
    </div>
  );
}

export default Form;
