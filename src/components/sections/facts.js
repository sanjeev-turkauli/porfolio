import React from "react";
import AOS from 'aos';


const FectSection = () => {

  AOS.init();

  return (
    <>
      <section id="facts" class="facts" style={{padding:"20px 0px"}}>
        <div class="container">
          <div class="section-title">
            <h2>Facts</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row no-gutters">
            <div
              class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
            >
              <div class="count-box">
                <i class="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="30"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Happy Clients</strong> consequuntur quae
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="count-box">
                <i class="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="40"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Projects</strong> adipisci atque cum quia aut
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="count-box">
                <i class="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="20"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Hours Of Support</strong> aut commodi quaerat
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="count-box">
                <i class="bi bi-people"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="10"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Hard Workers</strong> rerum asperiores dolor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FectSection;
