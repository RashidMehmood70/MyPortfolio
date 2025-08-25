import React from 'react';
import './footer.css'; // Optional: Create a Footer.css file for styling

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="copyright">
          &copy; {currentYear} Rashid Mehmood. All rights reserved.
        </div>
        <div className="social-links">
          <a href="[Your LinkedIn Profile URL]" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.png" alt="LinkedIn" /> {/* Replace with your icon path or component */}
          </a>
          <a href="[Your GitHub Profile URL]" target="_blank" rel="noopener noreferrer">
            <img src="/github-icon.png" alt="GitHub" /> {/* Replace with your icon path or component */}
          </a>
          {/* Add more social links as needed */}
        </div>
        <div className="contact-info">
          <p>Email: <a href="mailto:[Your Email Address]">rashidmehmood70@gmail.com</a></p>
          <p>Phone: +92303443374</p>
        </div>
        <a href="#" className="back-to-top">
          Back to Top
        </a>
      </div>
    </footer>
  );
}

export default Footer;