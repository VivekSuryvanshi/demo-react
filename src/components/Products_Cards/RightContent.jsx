import React from "react";
import "./style.css";

const RightContent = (props) => {
  return (
    <>
      {/* <section class="Product_Section">
        <div class="container d-sm-flex">
          <div class="row">
            <div class="col-md-7 col-sm-6 order-last  order-lg-first">
              <h3 class="poster_title">{props.title}</h3>
              <p class="poster_paragraph">{props.desc}</p>
              <ul class="ul_list">
                {props.properties.map((res) => (
                  <li class="product_item">
                    <i class="bi bi-check-lg"></i>
                    <p class="product_paragraph">{res}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div class="col-md-5 order-lg-last order-first">
              <div class="poster_container">
                <img
                  src={props.image}
                  class="img-fluid poster_image"
                  alt={props.title}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div class="container product_card">
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 z-n1 product_container container_part d-flex align-items-center">
            <img
              src={props.image}
              class="col-lg-10 col-11 img-fluid"
              alt={props.title}
            />
            <div class="animated_icon_div">
              <img class="animated_icon" src={props.icon} alt={props.title} />
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 right_container">
            <div class="text_box">
              <h2 class="text_card">{props.title}</h2>
              <p>{props.desc}</p>
              <ul class="ul_list">
                {props.properties.map((res) => (
                  <li className="d-flex">
                    <i class="bi bi-check-lg"></i>
                    <p className="ps-1">{res}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightContent;
