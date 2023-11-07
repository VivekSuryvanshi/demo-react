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
              src="../assets/images/logos/bbvmg_logo.webp"
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
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              >
                                Rice Husk
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              >
                                Yellow Maize
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              >
                                Soyabean
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              >
                                NON GMO
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              >
                                Raw materials & other feed
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
                              Fertilizers{" "}
                              <i class="bi bi-chevron-down fw-bold"></i>
                            </div>
                          </NavLink>
                          <ul class="dropdown-menu">
                            <li>
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              >
                                Urea N46 – Granular / Prilled
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              >
                                DAP & MAP
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              >
                                Complex & Soluble Fertilizers
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              >
                                Potash & NPK
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              >
                                Bio NPK & Bio DAP
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              >
                                Bio PROM
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                class="dropdown-item"
                                to="/product/CattlefeedFertilizers"
                                onClick={() => setOpenMenu(false)}
                              >
                                UREA GAS / LIQUID
                              </NavLink>
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
                          <NavLink
                            class="dropdown-item"
                            to="/"
                            onClick={() => setOpenMenu(false)}
                          >
                            BioDiesel
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/"
                            onClick={() => setOpenMenu(false)}
                          >
                            Ethanol
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/"
                            onClick={() => setOpenMenu(false)}
                          >
                            BIO LNG
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/"
                            onClick={() => setOpenMenu(false)}
                          >
                            Fatty Acids & Sterne.
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            class="dropdown-item"
                            to="/"
                            onClick={() => setOpenMenu(false)}
                          >
                            Palm Oil & used Cooking Oil
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        class="dropdown-item"
                        to="/"
                        onClick={() => setOpenMenu(false)}
                      >
                        Minerals & Ores
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        class="dropdown-item"
                        to="/"
                        onClick={() => setOpenMenu(false)}
                      >
                        Metals
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        class="dropdown-item"
                        to="/"
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
