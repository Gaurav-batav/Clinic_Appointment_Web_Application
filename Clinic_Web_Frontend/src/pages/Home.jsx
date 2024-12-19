import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home(){

  return (
    <>
    <Header/>
      {/* Slider Area Start */}
      <div className="slider_area">
        <div className="slider_active owl-carousel">
          <div className="single_slider d-flex align-items-center slider_bg_2">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text">
                    <h3>
                      <span>Health care</span> <br />
                      For Whole Family
                    </h3>
                    <p>
                      In healthcare sector, service excellence is the facility
                      of <br /> the hospital as healthcare service provider to
                      consistently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider d-flex align-items-center slider_bg_1">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text">
                    <h3>
                      <span>Health care</span> <br />
                      For Whole Family
                    </h3>
                    <p>
                      In healthcare sector, service excellence is the facility
                      of <br /> the hospital as healthcare service provider to
                      consistently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider Area End */}

      {/* Welcome Docmed Area Start */}
      <div className="welcome_docmed_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="welcome_thumb">
                <div className="thumb_1">
                  <img src="img/about/1.png" alt="About Us 1" />
                </div>
                <div className="thumb_2">
                  <img src="img/about/2.png" alt="About Us 2" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="welcome_docmed_info">
                <h2>Welcome to Docmed</h2>
                <h3>
                  Best Care For Your <br />
                  Good Health
                </h3>
                <p>
                  Esteem spirit temper too say adieus who direct esteem. It
                  esteems luckily or picture placing drawing. Apartments
                  frequently or motionless on reasonable projecting expression.
                </p>
                <ul>
                  <li>
                    <i className="flaticon-right"></i> Apartments frequently or
                    motionless.
                  </li>
                  <li>
                    <i className="flaticon-right"></i> Duis aute irure dolor in
                    reprehenderit in voluptate.
                  </li>
                  <li>
                    <i className="flaticon-right"></i> Voluptatem quia voluptas
                    sit aspernatur.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Welcome Docmed Area End */}

      {/* Service Area Start */}
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
            {[
              { name: "Eye Care", img: "img/department/1.png" },
              { name: "Physical Therapy", img: "img/department/2.png" },
              { name: "Dental Care", img: "img/department/3.png" },
              { name: "Diagnostic Test", img: "img/department/4.png" },
              { name: "Skin Surgery", img: "img/department/5.png" },
              { name: "Surgery Service", img: "img/department/6.png" },
            ].map((service, index) => (
              <div key={index} className="col-xl-4 col-md-6 col-lg-4">
                <div className="single_department">
                  <div className="department_thumb">
                    <img src={service.img} alt={service.name} />
                  </div>
                  <div className="department_content">
                    <h3>
                      <a href="#">{service.name}</a>
                    </h3>
                    <p>
                      Esteem spirit temper too say adieus who direct esteem.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service Area End */}

      {/* Expert Doctors Area Start */}
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
            <div className="col-xl-12">
              <div className="expert_active owl-carousel">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="single_expert">
                    <div className="expert_thumb">
                      <img
                        src={`img/experts/${(index % 4) + 1}.png`}
                        alt={`Doctor ${index}`}
                      />
                    </div>
                    <div className="experts_name text-center">
                      <h3>Mirazul Alom</h3>
                      <span>Neurologist</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Expert Doctors Area End */}

      {/* Emergency Contact Start */}
      <div className="Emergency_contact">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-xl-6">
              <div className="single_emergency d-flex align-items-center justify-content-center emergency_bg_1 overlay_skyblue">
                <div className="info">
                  <h3>For Any Emergency Contact</h3>
                  <p>Esteem spirit temper too say adieus.</p>
                </div>
                <div className="info_button">
                  <a href="#" className="boxed-btn3-white">
                    +10 378 4673 467
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="single_emergency d-flex align-items-center justify-content-center emergency_bg_2 overlay_skyblue">
                <div className="info">
                  <h3>Make an Online Appointment</h3>
                  <p>Esteem spirit temper too say adieus.</p>
                </div>
                <div className="info_button">
                  <a href="#" className="boxed-btn3-white">
                    Make an Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Emergency Contact End */}
      <Footer/>
    </>
  );
};
