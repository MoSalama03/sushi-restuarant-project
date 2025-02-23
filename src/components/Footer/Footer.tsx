import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper">
      <nav className="footer-nav">
        <ul className="footer-link">
          <span className="footer-link-span">Useful Links</span>
          <li className="footer-link-item"><a href="#">About us</a></li>
          <li className="footer-link-item"><a href="#">Events</a></li>
          <li className="footer-link-item"><a href="#">Blogs</a></li>
          <li className="footer-link-item"><a href="#">FAQ</a></li>
        </ul>
        <ul className="footer-link">
          <span className="footer-link-span">Main Menu</span>
          <li className="footer-link-item"><a href="#">Home</a></li>
          <li className="footer-link-item"><a href="#">Offers</a></li>
          <li className="footer-link-item"><a href="#">Menus</a></li>
          <li className="footer-link-item"><a href="#">Reservation</a></li>
        </ul>
        <ul className="footer-link">
          <span className="footer-link-span">Contact us</span>
          <li className="footer-link-item"><a href="#">example@email.com</a></li>
          <li className="footer-link-item">+64 958 248 966</li>
          <li className="footer-link-item"><a href="#">Social media</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;