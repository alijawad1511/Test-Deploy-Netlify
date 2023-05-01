import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 Your Company. All Rights Reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="contact-info">
              <li>
                <i className="fa-solid fa-location-dot"></i>123 Main Street,
                Anytown, USA
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>555-555-5555
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>info@example.com
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
