import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <header>
      <div className="header-area">
        {/* Top Area */}
        <div className="header-top_area">
          <div className="container">
            <div className="row">
              {/* Social Media Links */}
              <div className="col-xl-6 col-md-6">
                <div className="social_media_links">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
              {/* Contact Info */}
              <div className="col-xl-6 col-md-6">
                <div className="short_contact_list">
                  <ul>
                    <li>
                      <a href="mailto:info@docmed.com">
                        <i className="fa fa-envelope"></i> info@docmed.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:160160">
                        <i className="fa fa-phone"></i> 160160
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div id="sticky-header" className="main-header-area">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-3 col-lg-2">
                <div className="logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="Docmed Logo" />
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-xl-6 col-lg-7">
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/" className="active">
                          home
                        </Link>
                      </li>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <a href="#">
                          blog <i className="ti-angle-down"></i>
                        </a>
                      </li>
                      <li>
                        <Link to="/about">
                          About <i className="ti-angle-down"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/doctors">Doctors</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Appointment Button */}
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="Appointment">
                  <div className="book_btn d-none d-lg-block">
                    <a className="popup-with-form" href="#test-form">
                      Make an Appointment
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};