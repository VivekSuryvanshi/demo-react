import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./progress.css";

const Example = () => {
  return (
    <>
      <section id="skills">
        <div className="container" data-aos="fade-up" data-aos-delay="1000">
          <header className="section-header">
            <h3>Our Skills</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </header>
          <div className="bars">
          <h6 className="title indicator">On Time Delivery</h6>
            <ProgressBar
              completed={100}
              animateOnRender={true}
              transitionDuration="10000ms"
              bgColor="teal"
              height="3.5rem"
              borderRadius="0"
            />
          </div>
          <div className="bars">
          <h6 className="title indicator">Success Rate</h6>
            <ProgressBar
              completed={98}
              animateOnRender={true}
              transitionDuration="10000ms"
              bgColor="#15227e"
              height="3.5rem"
              borderRadius="0"
            />
          </div>
          <div className="bars">
          <h6 className="title indicator">Availability of Goods</h6>
            <ProgressBar
              completed={87}
              animateOnRender={true}
              transitionDuration="10000ms"
              bgColor="#ffc107"
              height="3.5rem"
              borderRadius="0"
            />
          </div>
          <div className="bars">
          <h6 className="title indicator">Communication</h6>
            <ProgressBar
              completed={89}
              animateOnRender={true}
              transitionDuration="10000ms"
              bgColor="#dc3545"
              height="3.5rem"
              borderRadius="0"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Example;
