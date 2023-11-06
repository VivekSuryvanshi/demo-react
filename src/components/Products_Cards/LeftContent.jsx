import React from "react";
import "./style.css";

const LeftContent = (props) => {
  return (
    <>
      <div class="container product_card">
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 container_part left_container order-last order-lg-first">
            <div class="animated_icon_div">
              <img
                class="animated_icon img-fluid"
                src={props.icon}
                alt={props.title}
              />
            </div>
            <div class="text_box">
              <h2 class="text_card">{props.title}</h2>
              <p class="product_desc">{props.desc}</p>
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
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 d-flex align-items-center justify-content-end order-lg-last order-first">
            <img
              src={props.image}
              alt={props.title}
              class="col-lg-10 col-11 img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftContent;
