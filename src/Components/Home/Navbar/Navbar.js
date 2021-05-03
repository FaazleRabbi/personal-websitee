import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <Link class="nav-item nav-link font-weight-bold mr-3 text-right  text-light" to="/home">
              HOME 
            </Link>
            <Link class="nav-item nav-link font-weight-bold mr-3 text-right  text-light" to="/about">
              ABOUT
            </Link>
            <Link class="nav-item nav-link font-weight-bold mr-3 text-right text-light" to="/contact">
              CONTACT
            </Link>
            <Link class="nav-item nav-link font-weight-bold mr-3  text-right text-light" to="/project">
              PROJECT
            </Link>
            <Link class="nav-item nav-link font-weight-bold mr-3 text-right text-light" to="/blog">
              BLOG
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
