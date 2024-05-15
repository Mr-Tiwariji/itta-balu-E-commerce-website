import React from "react";
import { Link } from "react-router-dom";
import logo2wobg from "../../assets/logos/logo2wobg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Join Us section */}
      <div className="container mx-auto text-center mb-8">
        <p className="text-xl text-slate-300">Want to join us?</p>
        <Link
          to="/signup"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:text-black"
        >
          Register Now
        </Link>
        <hr className="border-gray-600 my-4" />
      </div>

      {/* Main footer content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and Name */}
        <div className="flex flex-col items-start">
          {/* Logo img */}
          <img src={logo2wobg} alt="Logo" class="w-24 h-24  " />

          <h2 className="text-lg text-white font-bold">ITTA BALU</h2>
        </div>

        {/* Column 2: About Us */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-white">About Us</h3>
          <Link
            to="/our-goal"
            className="hover:underline mt-2 text-sm text-slate-50"
          >
            Our Goal
          </Link>
          <Link
            to="/our-value"
            className="hover:underline text-sm text-slate-50"
          >
            Our Value
          </Link>
        </div>

        {/* Column 3: Support */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-white">Support</h3>
          <Link
            to="/support-request"
            className="hover:underline mt-2 text-sm text-slate-50"
          >
            Support Request
          </Link>
          <Link
            to="/contact-us"
            className="hover:underline text-sm text-slate-50"
          >
            Contact Us
          </Link>
          <Link
            to="/help-center"
            className="hover:underline text-sm text-slate-50"
          >
            Help Center
          </Link>
        </div>

        {/* Column 4: Follow Us */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-2 justify-center text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="container mx-auto text-center mt-8">
        <hr className="border-gray-600" />
        <div className="flex justify-center items-center space-x-60 mt-4 pb-4 text-sm">
          <p className="text-white">
            © {new Date().getFullYear()} ITTA BALU. All rights reserved.
          </p>
          <Link to="/privacy-policy" className="hover:underline text-gray-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
