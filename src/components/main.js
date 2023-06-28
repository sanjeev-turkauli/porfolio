import React from "react";
import ContaectSection from "./sections/contact";
import testimonialSection from "./sections/testimonials";
import ServiceSection from "./sections/services";
import MyPhoto from '../assets/img/me.jpg';
import BackGroungImage from '../assets/img/bg.jpg';
import '../assets/css/custom.css';


const MainPage = () => {
  return (
    <>
      <div className="container-fluid p-0 overflow-hidden">
          <div className="row d-flex flex-row-reverse" style={{height: '100vh'}}>
            <div className="col-md-5 col-sm-12 imageBox">
                <div className="showImage">
                    
                </div>
            </div>
            <div className="col-md-6 col-sm-12 ">2</div>
          </div>
      </div>
    </>
  );
};

export default MainPage;
