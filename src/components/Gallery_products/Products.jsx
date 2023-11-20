import React, { useEffect, useState } from "react";
import "./Product.css";
import PortfolioList from "../Gallery_products_list/PortfolioList";
import {
  featuredPortfoilio,
  partneringProcedure,
  workingWithRefiners,
  middleDistillates,
} from "../../data/portfoliodata";

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
        className="portfolio container"
        id="portfolio"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <header className="section-header">
          <h3>Trading <br/> Portfolio</h3>
        </header>
        <p className="portfolio_text">
        Bhagirath BVM Grand (HK) Limited Trading Portfolio. We serve as the catalysts of global trade, connecting the world through commerce. Our passion for trade transcends borders, and we're your trusted partner for all things products. From sourcing to supply, we inspire global trade, providing a reliable gateway to a world of possibilities. Our commitment to excellence and relentless pursuit of quality make us the preferred choice for businesses looking to explore, expand, and excel in international trade. Join us on this journey, and together, let's shape a future of global trade that makes things deliver at your doorstep.
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
