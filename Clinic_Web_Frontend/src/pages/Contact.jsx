import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Contact () {
  return (
    <>
      <Header/>
    <div className="contact_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <h3>Get in Touch</h3>
            <p>
              Address: 200, D-block, Green lane USA <br />
              Phone: +10 367 467 8934 <br />
              Email: docmed@contact.com
            </p>
          </div>
          <div className="col-xl-6">
            <form action="#">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit" className="boxed-btn3">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
