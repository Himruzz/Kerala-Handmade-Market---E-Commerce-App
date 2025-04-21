import Link from "next/link";
import React from "react";
import "./footer-styles.css";

const Footer = () => {
  return (
    <footer className="footer-bg text-light">
      <div className="container pt-5">
        <div className="row text-center text-md-start">
          {/* Brand Description */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h3 className="h5 font-serif mb-3">The Handmade Market</h3>
            <p>
              Where tradition meets elegance. Discover Kerala’s finest handmade
              treasures crafted with care and heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h4 className="h6 mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <Link href="/about-us" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/collections" className="footer-link">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h4 className="h6 mb-3">Contact Info</h4>
            <ul className="list-unstyled">
              <li>123 Artisan Street</li>
              <li>Kochi, Kerala 682001</li>
              <li>Tel: +91-98765-43210</li>
              <li>Email: info@lorentia.com</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h4 className="h6 mb-3">Follow Us</h4>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-top border-secondary py-2 mt-4"></div>
        {/* Footer Bottom */}
        <div className="text-center">
          <p className="mb-0">&copy; 2025 The Handmade Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;