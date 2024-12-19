import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function  Doctors () {
  const doctors = [
    { name: "Mirazul Alom", role: "Neurologist", img: "img/experts/1.png" },
    { name: "Dr. Sarah Smith", role: "Cardiologist", img: "img/experts/2.png" },
    { name: "Dr. John Doe", role: "Orthopedist", img: "img/experts/3.png" },
  ];
  return (
    <>
      <Header/>
    <div className="expert_doctors_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="doctors_title mb-55">
              <h3>Expert Doctors</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {doctors.map((doctor, index) => (
            <div className="col-xl-4 col-md-6 col-lg-4" key={index}>
              <div className="single_expert">
                <div className="expert_thumb">
                  <img src={doctor.img} alt={doctor.name} />
                </div>
                <div className="experts_name text-center">
                  <h3>{doctor.name}</h3>
                  <span>{doctor.role}</span>
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
