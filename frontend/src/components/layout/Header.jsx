import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/app.scss";
import logo2wobg from "../../assets/logos/logo2wobg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="headerContainer">
      {/* <div className="container mx-auto flex justify-between items-center"> */}
      <div className="navBar-content">
        <Link to="/">
          <img
            src={logo2wobg}
            alt="Logo"
            class="w-24 h-24 ml-1 mr-0 mt-1 mb-8 rounded-full shadow-md"
          />
        </Link>
        <Link
          to="/"
          className="text-3xl font-bold font-serif text-slate-300 -ml-10"
        >
          ITTA BALU
        </Link>
        {/* Navigation links for desktop */}
        <nav className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-white hover:scale-110 hover:shadow-gray-700 "
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-700 hover:text-white hover:scale-110 hover:shadow-gray-700"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-white hover:scale-110 hover:shadow-gray-700"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-white hover:scale-110 hover:shadow-gray-700"
          >
            About Us
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-white hover:scale-110 hover:shadow-gray-700"
          >
            Cart
          </Link>
        </nav>
        {/* Search bar, cart, and user actions */}
        <div className="flex items-center space-x-3">
          {/* Search input box */}
          <div className="relative ">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full px-2 py-1"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3 top-2 text-black-400"
            />
            {/* <i className="fas fa-search absolute top-1 right-1 text-gray-600"></i> */}
          </div>
          {/* Cart icon */}
          {/* <i className="fas fa-shopping-cart text-gray-700 hover:text-blue-600"></i> */}
          <FontAwesomeIcon icon={faShoppingCart} />
          {/* User-related actions */}
          <Link to="/login" className="text-gray-700 hover:text-white">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none focus:text-blue-600"
            onClick={toggleMenu}
          >
            <i
              className={
                isMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} />
                ) : (
                  <FontAwesomeIcon icon={faBars} />
                )
              }
            ></i>
          </button>
        </div>
      </div>
      {/* Sidebar menu for mobile */}
      {isMenuOpen && (
        <nav className="md:hidden absolute bg-white shadow-md top-0 left-0 w-full p-4">
          <Link to="/" className="block text-gray-700 hover:text-blue-600 my-2">
            Home
          </Link>
          <Link
            to="/products"
            className="block text-gray-700 hover:text-blue-600 my-2"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-blue-600 my-2"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-blue-600 my-2"
          >
            About Us
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
