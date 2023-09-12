import React, { useEffect, useState } from "react";
import "./Product.css";
import PortfolioList from "../Gallery_products_list/PortfolioList";
import {
  featuredPortfoilio,
  partneringProcedure,
  workingWithRefiners,
  middleDistillates,
} from "../../portfoliodata";

function Products() {
  const [selected, setSelected] = useState("crude oil");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "crude oil",
      title: "CRUDE OIL",
    },
    {
      id: "partenering procedure",
      title: "PARTNERING PROCEDUCER",
    },
    {
      id: "working with refiners",
      title: "WORKING WITH REFINERS",
    },
    {
      id: "middle distillates",
      title: "MIDDLE DISTILLATES",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "crude oil":
        setData(featuredPortfoilio);
        break;
      case "partenering procedure":
        setData(partneringProcedure);
        break;
      case "working with refiners":
        setData(workingWithRefiners);
        break;
      case "middle distillates":
        setData(middleDistillates);
        break;
      default:
        setData(featuredPortfoilio);
    }
  }, [selected]);
  return (
    <>
      <div
        className="portfolio"
        id="portfolio"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <header className="section-header">
          <h3>Trading Portfolio</h3>
        </header>
        <p className="portfolio_text">
          Our business is founded on the long-term relationships we've built
          with our customers, on our expertise, market understanding and
          reputation for reliably delivering the required products, on time and
          to specification. With some offices worldwide and a network of teams
          globally, we understand that every market is different. We work with
          our customers to identify and develop solutions which work best for
          them, helping them manage physical risk and optimise opportunities.
        </p>
        <ul className="portfolio_ul">
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="portfolio_container">
          {data.map((d) => (
            <div className="portfolio_item">
              <img
                className="portfolio_img"
                src={d.img}
                alt=""
              />
              <h4 className="portfolio_item_content">{d.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
