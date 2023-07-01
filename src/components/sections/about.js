import React,{useEffect,useContext} from "react";
import ProfileImage from '../../assets/img/profile-img.jpg';
import FectSection from "./facts";
import AOS from 'aos';
import PureCounter from "@srexi/purecounterjs";
import DataContext from '../../context/data/myState';


const AboutSection = () => {
  let data = useContext(DataContext);
  useEffect(()=>{
    new PureCounter();
    AOS.init(); 
  },[]);
 
  return (
    <>
      <section id="about" class="about" style={{padding:"20px 0px"}}>
        <div class="container">
          <div class="section-title">
            <h2>About</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-4"  style={{opacity: "1"}}>
              <img src={`${ProfileImage}`} class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Full Stack Developer  &amp; YouTuber.</h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>{data.dob}</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong> <span><a href={data.webSite} target="_blank">{data.webSite}</a></span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>{data.phone}</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                      <span>{data.city}</span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
                      <span>{data.age}</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>{data.degree}</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>{data.email}</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>{data.freelance}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FectSection/>
    </>
  );
};

export default AboutSection;
