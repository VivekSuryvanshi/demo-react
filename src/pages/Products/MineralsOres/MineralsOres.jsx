import React from "react";
import { Link } from "react-router-dom";
import LeftContent from "../../../components/Products_Cards/LeftContent";
import RightContent from "../../../components/Products_Cards/RightContent";
import productsData from "../../../data/productsdata";

const MineralsOres = () => {
  const data = productsData.mineralsAndOres;
  return (
    <>
      <main id="main">
        <div className="hero">
          <div className="hero_bg bg_img10">
            <div
              className="breadcrums container aos-init aos-animate"
              data-aos="fade"
            >
              <h2 className="breadcrums_title">Minerals & Ores</h2>
              <ol className="breadcrums_subtitle">
                <li>
                  <Link style={{ color: "white" }} to="/">
                    Home
                  </Link>
                </li>
                <li style={{ color: "#5ca595" }} className="breadcrums_items">
                  / Minerals & Ores
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="input_box">
          <div className="icons_section row container d-flex align-items-center">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Minerals & Ores/Ferro Crome.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Ferro Crome</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Minerals & Ores/Iron Ore.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Iron Ore</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 sm_pd_top">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Minerals & Ores/Coal.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Coal</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 sm_pd_top">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Minerals & Ores/Crome Concentrate.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Crome Concentrate</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="agro_commodities" className="container" data-aos="fade-up">
          <header className="section-header">
            <h3>Products We Serves</h3>
            <p className="col-lg-10 col-12 mx-auto">
            Welcome to Bhagirath BVM Grand's Minerals & Ores selection. We are the driving force behind global trade, connecting nations and industries. With products including Ferro Chrome, Iron Ore, Coal, Chrome Concentrate, Bauxite, Calamine, Manganese, and Lithium, we're your reliable source for raw materials. Trust us to open doors to a world of trade opportunities.

            </p>
          </header>
          <div class="timeline container col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-12">
            <div id={data[0].id}>
              <LeftContent
                title={data[0].title}
                desc={data[0].desc}
                icon={data[0].icon}
                image={data[0].image}
                properties={data[0].properties}
              />
            </div>
            <div id={data[1].id}>
              <RightContent
                title={data[1].title}
                desc={data[1].desc}
                icon={data[1].icon}
                image={data[1].image}
                properties={data[1].properties}
              />
            </div>
            <div id={data[2].id}>
              <LeftContent
                title={data[2].title}
                desc={data[2].desc}
                icon={data[2].icon}
                image={data[2].image}
                properties={data[2].properties}
              />
            </div>
            <div id={data[3].id}>
              <RightContent
                title={data[3].title}
                desc={data[3].desc}
                icon={data[3].icon}
                image={data[3].image}
                properties={data[3].properties}
              />
            </div>
            <div id={data[4].id}>
              <LeftContent
                title={data[4].title}
                desc={data[4].desc}
                icon={data[4].icon}
                image={data[4].image}
                properties={data[4].properties}
              />
            </div>
            <div id={data[5].id}>
              <RightContent
                title={data[5].title}
                desc={data[5].desc}
                icon={data[5].icon}
                image={data[5].image}
                properties={data[5].properties}
              />
            </div>
            <div id={data[6].id}>
              <LeftContent
                title={data[6].title}
                desc={data[6].desc}
                icon={data[6].icon}
                image={data[6].image}
                properties={data[6].properties}
              />
            </div>
            <div id={data[7].id}>
              <RightContent
                title={data[7].title}
                desc={data[7].desc}
                icon={data[7].icon}
                image={data[7].image}
                properties={data[7].properties}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MineralsOres;
