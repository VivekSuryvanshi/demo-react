import React from "react";
import "./style.css";

const RightContent = (props) => {
  return (
    <>
      <section class="Product_Section">
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
      </section>
    </>
  );
};

export default RightContent;
