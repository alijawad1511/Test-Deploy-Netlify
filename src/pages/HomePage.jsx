import React from "react";
import Navbar from "../components/home/Navbar";
import bg from "../images/bg.jpg";
import "./HomePage.css";
import ImageSlider from "../components/home/ImageSlider";
import Footer from "../components/home/Footer";
import { Link } from "react-router-dom";
// https://uilogos.co/img/logotype/ideaa.png
const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <nav>
        <div className="logo">
          <a href="#">
            <img src="https://uilogos.co/img/logotype/ideaa.png" alt="Logo" />
          </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Startup</h1>
          <p>We create innovative solutions for your business needs.</p>
          <div className="button-group">
            <Link to="/login" className="button login-button">
              Login
            </Link>
            <Link to="signup" className="button signup-button">
              Sign Up
            </Link>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="image-container">
          <img
            src="https://dcompany.no/content/uploads/sites/2/2022/01/General-Meetings-1024x893.png"
            alt="Startup Image"
          />
        </div>
        <div className="text-container">
          <h2>About Us</h2>
          <p>
            We are a startup that is passionate about creating innovative
            solutions for our customers. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis ultricies, purus eget condimentum vestibulum,
            nisi lorem iaculis nisi, eu facilisis risus massa sed ante.
          </p>
        </div>
      </section>
      <ImageSlider />
      <Footer />
    </>
  );
};

export default HomePage;
