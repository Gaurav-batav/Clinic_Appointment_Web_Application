import React from "react";
import Header from "../components/Header"
import Footer from"../components/Footer"

export default function About () {
  return (
    <>
    <Header/>
    <div className="about_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <div className="about_thumb">
              <img src="img/about/about.png" alt="About Us" />
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="about_info">
              <h3>About Us</h3>
              <p>
                Firmament morning sixth subdue darkness creeping gathered divide
                our let god moving. Moving in fourth air night bring upon it
                beast. Bring upon.
              </p>
              <a href="#" className="boxed-btn3">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
