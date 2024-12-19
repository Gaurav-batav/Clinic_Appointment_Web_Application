import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Services (){
  const services = [
    { title: "Eye Care", img: "img/department/1.png" },
    { title: "Physical Therapy", img: "img/department/2.png" },
    { title: "Dental Care", img: "img/department/3.png" },
    { title: "Diagnostic Test", img: "img/department/4.png" },
    { title: "Skin Surgery", img: "img/department/5.png" },
    { title: "Surgery Service", img: "img/department/6.png" },
  ];
  
  return (
      <>
      <Header/>  
    <div className="our_department_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-55">
              <h3>Our Services</h3>
              <p>
                Esteem spirit temper too say adieus who direct esteem. <br />
                It esteems luckily or picture placing drawing.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-xl-4 col-md-6 col-lg-4" key={index}>
              <div className="single_department">
                <div className="department_thumb">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="department_content">
                  <h3>
                    <a href="#">{service.title}</a>
                  </h3>
                  <p>Esteem spirit temper too say adieus who direct esteem.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
