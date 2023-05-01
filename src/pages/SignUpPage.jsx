import { Link } from "react-router-dom";
import "./SignUpPage.css";
import { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    await axios
      .post(
        process.env.REACT_APP_API_ENDPOINT_CREATE,
        {
          email,
          password,
          companyName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            APIRAGKey: process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Login Successfully");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      });
  };

  return (
    <form onSubmit={handleSignUp}>
      <h1>Sign Up</h1>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        name="email"
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        name="password"
        required
      />

      <label htmlFor="company">Company Name</label>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        id="company"
        name="company"
        required
      />

      <input type="submit" value="Sign Up" />
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
      <Link className="home-link" to="/">
        Go to Home
      </Link>
    </form>
  );
};

export default SignUpPage;
