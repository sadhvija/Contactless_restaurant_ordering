import React from 'react';
// import '../styles/Footer.css';
import SmartDine from "/Images/SmartDine.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,FaArrowRight } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-logo">
            <img src={SmartDine} alt="Less Talking, More Eating" width="100px" />
            <p>Scan More - Eat More</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
             
                <p>Features</p>
                <p>Pricing</p>
                <p>Request Demo</p>
                <p>Integration</p>
             
            </div>

            <div className="footer-column">
              <h4>Company</h4>
          
                <p>About Us</p>
                <p>Testimonials</p>
                <p>Blog</p>
                <p>Careers</p>
            
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              
                <p>Help Center</p>
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>System Status</p>
              
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><FaFacebookF size={20} color="white" /></a>
                <a href="#" aria-label="Twitter"><FaTwitter size={20} color="white" /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={20} color="white" /></a>
                <a href="#" aria-label="Instagram"><FaInstagram size={20} color="white" /></a>
              </div>
              <div className="newsletter">
                <h5>Stay Updated</h5>
                <form className="newsletter-form">
                  <input type="email" placeholder="Your email" required />
                  <button type="submit" aria-label="Subscribe">
                    <FaArrowRight/>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Scan More-Eat More. All rights reserved.</p>
          <div className="legal-links">
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;