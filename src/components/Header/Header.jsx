import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light sticky_header bg-light"
        aria-label="Offcanvas navbar large"
      >
        <div class="container-fluid">
          <NavLink class="navbar-brand logo responsive_logo" to="/">
            <img
              src="../assets/images/logos/bbvmg_logo.png"
              alt="logo"
              width="100px"
              loading="lazy"
            />
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
            onClick={() => setOpenMenu(true)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              openMenu
                ? "offcanvas offcanvas-end text-bg-light show"
                : "offcanvas offcanvas-end text-bg-light"
            }
            tabindex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div class="offcanvas-header ">
              <img
                src="../assets/images/logos/bbvmg_logo.webp"
                alt="logo"
                width="100px"
                loading="lazy"
              />
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <NavLink
                    class="nav-NavLink active"
                    aria-current="page"
                    to="/"
                    onClick={() => setOpenMenu(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    class="nav-NavLink"
                    to="/about"
                    onClick={() => setOpenMenu(false)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li class="nav-item dropdown">
                  <NavLink
                    class="nav-NavLink dropdown-toggle"
                    to="/products"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div>
                      Products <i class="bi bi-chevron-down fw-bold"></i>
                    </div>
                  </NavLink>
                  <ul class="dropdown-menu">
                    <li>
                      <NavLink
                        class="dropdown-item"
                        to="/product/AgroCommodities"
                        onClick={() => setOpenMenu(false)}
                      >
                        Agro Commodities
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        class="dropdown-item"
                        to="/product/EdibleNonEdibleOil"
                        onClick={() => setOpenMenu(false)}
                      >
                        Edible & Non Edible Oil (Crude)
                      </NavLink>
                    </li>
                    <li class="nav-item dropdown">
                      <NavLink
                        class="nav-NavLink dropdown-toggle"
                        to="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div>
                          Chemicals <i class="bi bi-chevron-down fw-bold"></i>
                        </div>
                      </NavLink>
                      <ul class="dropdown-menu">
                        <li>
                          <HashLink
                            class="dropdown-item"
                            to="/chemicals#polymers"
                            onClick={() => setOpenMenu(false)}
                          >
                            Polymers
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            class="dropdown-item"
                            to="/chemicals#solvents"
                            onClick={() => setOpenMenu(false)}
                          >
                            Solvents
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            class="dropdown-item"
                            to="/chemicals#intermediates"
                            onClick={() => setOpenMenu(false)}
                          >
                            Chemicals & Intermediates
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            class="dropdown-item"
                            to="/chemicals#speciality_chemicals"
                            onClick={() => setOpenMenu(false)}
                          >
                            Speciality Chemicals
                          </HashLink>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <NavLink
                        class="nav-NavLink dropdown-toggle"
                        to="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div>
                          Petroleum & Oil Products{" "}
                          <i class="bi bi-chevron-down fw-bold"></i>
                        </div>
                      </NavLink>
                      <ul class="dropdown-menu">
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/product/PetroleumProducts"
                            onClick={() => setOpenMenu(false)}
                          >
                            Aviation Fuel (JetFuel)
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/product/PetroleumProducts"
                            onClick={() => setOpenMenu(false)}
                          >
                            D2 Gas Oil
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/product/PetroleumProducts"
                            onClick={() => setOpenMenu(false)}
                          >
                            D6 Diesel Bunker Fuel
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/product/PetroleumProducts"
                            onClick={() => setOpenMenu(false)}
                          >
                            EN-590 Diesel ULSD
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/product/PetroleumProducts"
                            onClick={() => setOpenMenu(false)}
                          >
                            Fuel Oil
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/product/PetroleumProducts"
                            onClick={() => setOpenMenu(false)}
                          >
                            Crude Oil
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/product/PetroleumProducts"
                            onClick={() => setOpenMenu(false)}
                          >
                            Mazut
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/product/PetroleumProducts"
                            onClick={() => setOpenMenu(false)}
                          >
                            Liquefied Petroleum Gas
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/product/PetroleumProducts"
                            onClick={() => setOpenMenu(false)}
                          >
                            Liquefied Natural Gas
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/product/PetroleumProducts"
                            onClick={() => setOpenMenu(false)}
                          >
                            Petroleum Coke (PETCOKE)
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/product/PetroleumProducts"
                            onClick={() => setOpenMenu(false)}
                          >
                            Bitumen (Asphalt)
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/product/PetroleumProducts"
                            onClick={() => setOpenMenu(false)}
                          >
                            Naphtha
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <NavLink
                        class="nav-NavLink dropdown-toggle"
                        to="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div>
                          Cattlefeed & Fertilizers{" "}
                          <i class="bi bi-chevron-down fw-bold"></i>
                        </div>
                      </NavLink>
                      <ul class="dropdown-menu">
                        <li class="nav-item dropdown">
                          <NavLink
                            class="nav-NavLink dropdown-toggle"
                            to="/"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <div>
                              Cattlefeed & Animal FEED{" "}
                              <i class="bi bi-chevron-down fw-bold"></i>
                            </div>
                          </NavLink>
                          <ul class="dropdown-menu">
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#RICE_HUSK"
                                onClick={() => setOpenMenu(false)}
                              >
                                Rice Husk
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#YELLOW_MAIZE"
                                onClick={() => setOpenMenu(false)}
                              >
                                Yellow Maize
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#SOYABEAN"
                                onClick={() => setOpenMenu(false)}
                              >
                                Soyabean
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#NON GMO"
                                onClick={() => setOpenMenu(false)}
                              >
                                NON GMO
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#RAW MATERIALS & OTHER FEEDS"
                                onClick={() => setOpenMenu(false)}
                              >
                                Raw materials & other feed
                              </HashLink>
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              ></NavLink>
                            </li>
                          </ul>
                        </li>

                        <li class="nav-item dropdown">
                          <NavLink
                            class="nav-NavLink dropdown-toggle"
                            to="/"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <div>
                              Fertilizers{" "}
                              <i class="bi bi-chevron-down fw-bold"></i>
                            </div>
                          </NavLink>
                          <ul class="dropdown-menu">
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#VERMI COMPOST"
                                onClick={() => setOpenMenu(false)}
                              >
                                Vermi Compost
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#UREA N46 - GRANULAR PRILLED"
                                onClick={() => setOpenMenu(false)}
                              >
                                Urea N46 – Granular / Prilled
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#DAP & MAP"
                                onClick={() => setOpenMenu(false)}
                              >
                                DAP & MAP
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#COMPLEX & SOLUABLE FERTILIZERS"
                                onClick={() => setOpenMenu(false)}
                              >
                                Complex & Soluble Fertilizers
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#POTASH NPK"
                                onClick={() => setOpenMenu(false)}
                              >
                                Potash & NPK
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#BIO NPK & BIO DAP"
                                onClick={() => setOpenMenu(false)}
                              >
                                Bio NPK & Bio DAP
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#BIO PROM"
                                onClick={() => setOpenMenu(false)}
                              >
                                Bio PROM
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers#UREA GAS / LIQUID"
                                onClick={() => setOpenMenu(false)}
                              >
                                UREA GAS / LIQUID
                              </HashLink>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <NavLink
                        class="nav-NavLink dropdown-toggle"
                        to="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div>
                          Bio Fuels <i class="bi bi-chevron-down fw-bold"></i>
                        </div>
                      </NavLink>
                      <ul class="dropdown-menu">
                        <li>
                          <HashLink
                            class="dropdown-item"
                            to="/product/BioFuels#BIO DIESEL"
                            onClick={() => setOpenMenu(false)}
                          >
                            BioDiesel
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            class="dropdown-item"
                            to="/product/BioFuels#ETHANOL"
                            onClick={() => setOpenMenu(false)}
                          >
                            Ethanol
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            class="dropdown-item"
                            to="/product/BioFuels#BIO LNG"
                            onClick={() => setOpenMenu(false)}
                          >
                            BIO LNG
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            class="dropdown-item"
                            to="/product/BioFuels#FATTY ACIDS & STERNE"
                            onClick={() => setOpenMenu(false)}
                          >
                            Fatty Acids & Sterne.
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            class="dropdown-item"
                            to="/product/BioFuels#PALM OIL & USED COOKING OIL"
                            onClick={() => setOpenMenu(false)}
                          >
                            Palm Oil & used Cooking Oil
                          </HashLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        class="dropdown-item"
                        to="/product/MineralsOres"
                        onClick={() => setOpenMenu(false)}
                      >
                        Minerals & Ores
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        class="dropdown-item"
                        to="/product/Metals"
                        onClick={() => setOpenMenu(false)}
                      >
                        Metals
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        class="dropdown-item"
                        to="/product/BuildingMaterials"
                        onClick={() => setOpenMenu(false)}
                      >
                        Building Materials & Chemicals
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <NavLink
                    class="nav-NavLink"
                    to="/services"
                    onClick={() => setOpenMenu(false)}
                  >
                    Services
                  </NavLink>
                </li>{" "}
                <li class="nav-item">
                  <NavLink
                    class="nav-NavLink"
                    to="/contact"
                    onClick={() => setOpenMenu(false)}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
