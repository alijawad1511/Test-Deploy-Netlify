import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    await axios
      .post(
        process.env.REACT_APP_API_ENDPOINT_LOGIN,
        {
          email,
          password
        },
        {
          headers: {
            "Content-Type": 'application/json',
            "APIRAGKey": process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then(response => {
        console.log(response.data);
        alert('Login Successfully');
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
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

      <input type="submit" value="Login" />
      <p>
        Don't have an account? <Link to="/signup">Sign Up here</Link>
      </p>
      <Link className="home-link" to="/">
        Go to Home
      </Link>
    </form>
  );
};

export default LoginPage;
