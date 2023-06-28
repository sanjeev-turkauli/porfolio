import React from "react";
import MyPhoto from '../assets/img/me.jpg';
import { NavLink } from 'react-router-dom';

const PageHeader = (props) => {
  
  const MobileNavHandle = () =>{
    document.querySelector("body").classList.toggle("mobile-nav-active");
    document.querySelector(".mobile-nav-toggle").classList.toggle('bi-list');
    document.querySelector(".mobile-nav-toggle").classList.toggle('bi-x');
  }

  return (
    <>
      {/* Header  */}
      <i class="bi bi-list mobile-nav-toggle d-xl-none" onClick={MobileNavHandle}></i>
      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img
              src={MyPhoto}
              alt=""
              class="img-fluid rounded-circle"
            />
            <h1 class="text-light">
              <a href="index.html">{props.currentUser}</a>
            </h1>
            <div class="social-links mt-3 text-center">
              <a href="#" class="twitter">
                <i class="bx bxl-twitter"></i>
              </a>
              <a href="#" class="facebook">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="#" class="instagram">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="#" class="google-plus">
                <i class="bx bxl-youtube"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li>
                <NavLink to={`/`} class="nav-link scrollto active">
                  <i class="bx bx-home"></i> <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/about`} class="nav-link scrollto">
                  <i class="bx bx-user"></i> <span>About</span>
                </NavLink>
              </li>
              <li>
                <NavLink  to={`/resume`} class="nav-link scrollto">
                  <i class="bx bx-file-blank"></i> <span>Resume</span>
                </NavLink>
              </li>
              <li>
                <NavLink  to={`/portfolio`} class="nav-link scrollto">
                  <i class="bx bx-book-content"></i> <span>Portfolio</span>
                </NavLink>
              </li>
              <li>
                <NavLink  to={`/services`} class="nav-link scrollto">
                  <i class="bx bx-server"></i> <span>Services</span>
                </NavLink>
              </li>
              <li>
                <NavLink  to={`/contact`} class="nav-link scrollto">
                  <i class="bx bx-envelope"></i> <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default PageHeader;
