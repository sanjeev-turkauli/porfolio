import React,{useState,useContext} from "react";
import PageHeader from './components/header';
import MainSection  from './components/main';
import Footer  from './components/footer';
import PortfolioSection from "./components/sections/portfolio";
import ResumeSection from "./components/sections/resume";
import SkillSection from "./components/sections/skills";
import FectSection from "./components/sections/facts";
import AboutSection from "./components/sections/about";
import ServiceSection from "./components/sections/services";
import ContactSection from "./components/sections/contact";



import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/css/style.css';
import SetBioData from "./context/data/biodata";




function App() {
  
  return (
    <>
    <SetBioData>
      <Router>
        <PageHeader currentUser={`Sanjeev Kumar`}/>
          <Routes>
            <Route path="/" exact element={<MainSection provider_name={`Sanjeev Kumar`}/>} />
            <Route path="/about" exact element={<AboutSection/>} />
            <Route path="/resume" exact element={<ResumeSection/>} />
            <Route path="/portfolio" exact element={<PortfolioSection/>} />
            <Route path="/services" exact element={<ServiceSection/>} />
            <Route path="/contact" exact element={<ContactSection/>} />
          </Routes>
        <Footer/>
      </Router>
    </SetBioData>
    </>
  );
}

export default App;
