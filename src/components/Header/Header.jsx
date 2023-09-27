// import React from "react";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <nav
//         class="navbar navbar-expand-lg navbar-light sticky_header bg-light"
//         aria-label="Offcanvas navbar large"
//       >
//         <div class="container-fluid">
//           <NavLink class="navbar-brand logo responsive_logo" to="/">
//             <img
//               src="http://bbvmg.com/media/image-and-png/bbvmg_logo_new_final.png"
//               alt="logo"
//               width="110px"
//               loading="lazy"
//             />
//           </NavLink>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasNavbar2"
//             aria-controls="offcanvasNavbar2"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div
//             class="offcanvas offcanvas-end text-bg-light"
//             tabindex="-1"
//             id="offcanvasNavbar2"
//             aria-labelledby="offcanvasNavbar2Label"
//           >
//             <div class="offcanvas-header">
//               <img
//                 src="http://bbvmg.com/media/image-and-png/bbvmg_logo_new_final.png"
//                 alt="logo"
//                 width="110px"
//                 loading="lazy"
//               />
//               <button
//                 type="button"
//                 class="btn-close btn-close-white"
//                 data-bs-dismiss="offcanvas"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="offcanvas-body">
//               <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
//                 <li class="nav-item">
//                   <NavLink class="nav-NavLink active" aria-current="page" to="#">
//                     Home
//                   </NavLink>
//                 </li>
//                 <li class="nav-item">
//                   <NavLink class="nav-NavLink" to="#">
//                     About Us
//                   </NavLink>
//                 </li>
//                 <li class="nav-item dropdown">
//                   <NavLink
//                     class="nav-NavLink dropdown-toggle"
//                     to="/"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     <div>
//                       Products <i class="bi bi-chevron-down fw-bold"></i>
//                     </div>
//                   </NavLink>
//                   <ul class="dropdown-menu">
//                     <li>
//                       <NavLink class="dropdown-item" to="/">
//                         Agro Commodities
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink class="dropdown-item" to="/">
//                         Edible & Non Edible Oil (Crude)
//                       </NavLink>
//                     </li>
//                     <li class="nav-item dropdown">
//                       <NavLink
//                         class="nav-NavLink dropdown-toggle"
//                         to="/"
//                         role="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         <div>
//                           Chemicals <i class="bi bi-chevron-down fw-bold"></i>
//                         </div>
//                       </NavLink>
//                       <ul class="dropdown-menu">
//                         <li>
//                           <NavLink class="dropdown-item" to="/polymers">
//                             Polymers
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Solvents
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Chemicals & Intermediates
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Speciality Chemicals
//                           </NavLink>
//                         </li>
//                       </ul>
//                     </li>
//                     <li class="nav-item dropdown">
//                       <NavLink
//                         class="nav-NavLink dropdown-toggle"
//                         to="/"
//                         role="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         <div>
//                           Petroleum & Oil Products{" "}
//                           <i class="bi bi-chevron-down fw-bold"></i>
//                         </div>
//                       </NavLink>
//                       <ul class="dropdown-menu">
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Aviation Fuel (JetFuel)
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             D2 Gas Oil
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             D6 Diesel Bunker Fuel
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             EN-590 Diesel ULSD
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Fuel Oil
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Crude Oil
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Mazut
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Liquefied Petroleum Gas
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Liquefied Natural Gas
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Petroleum Coke (PETCOKE)
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Bitumen (Asphalt)
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Naphtha
//                           </NavLink>
//                         </li>
//                       </ul>
//                     </li>
//                     <li class="nav-item dropdown">
//                       <NavLink
//                         class="nav-NavLink dropdown-toggle"
//                         to="/"
//                         role="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         <div>
//                           Cattlefeed & Fertilizers{" "}
//                           <i class="bi bi-chevron-down fw-bold"></i>
//                         </div>
//                       </NavLink>
//                       <ul class="dropdown-menu">
//                         <li class="nav-item dropdown">
//                           <NavLink
//                             class="nav-NavLink dropdown-toggle"
//                             to="/"
//                             role="button"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                           >
//                             <div>
//                               Cattlefeed & Animal FEED{" "}
//                               <i class="bi bi-chevron-down fw-bold"></i>
//                             </div>
//                           </NavLink>
//                           <ul class="dropdown-menu">
//                             <li>
//                               <NavLink class="dropdown-item" to="/">
//                                 Rice Husk
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink class="dropdown-item" to="/">
//                                 Yellow Maize
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink class="dropdown-item" to="/">
//                                 Soyabean
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink class="dropdown-item" to="/">
//                                 NON GMO
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink class="dropdown-item" to="/">
//                                 Raw materials & other feed
//                               </NavLink>
//                             </li>
//                           </ul>
//                         </li>

//                         <li class="nav-item dropdown">
//                           <NavLink
//                             class="nav-NavLink dropdown-toggle"
//                             to="/"
//                             role="button"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                           >
//                             <div>
//                               Fertilizers{" "}
//                               <i class="bi bi-chevron-down fw-bold"></i>
//                             </div>
//                           </NavLink>
//                           <ul class="dropdown-menu">
//                             <li>
//                               <NavLink class="dropdown-item" to="/">
//                                 Urea N46 – Granular / Prilled
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink class="dropdown-item" to="/">
//                                 DAP & MAP
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink class="dropdown-item" to="/">
//                                 Complex & Soluble Fertilizers
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink class="dropdown-item" to="/">
//                                 Potash & NPK
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink class="dropdown-item" to="/">
//                                 Bio NPK & Bio DAP
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink class="dropdown-item" to="/">
//                                 Bio PROM
//                               </NavLink>
//                             </li>
//                             <li>
//                               <NavLink class="dropdown-item" to="/">
//                                 UREA GAS / LIQUID
//                               </NavLink>
//                             </li>
//                           </ul>
//                         </li>
//                       </ul>
//                     </li>
//                     <li class="nav-item dropdown">
//                       <NavLink
//                         class="nav-NavLink dropdown-toggle"
//                         to="/"
//                         role="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         <div>
//                           Bio Fuels <i class="bi bi-chevron-down fw-bold"></i>
//                         </div>
//                       </NavLink>
//                       <ul class="dropdown-menu">
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             BioDiesel
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Ethanol
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             BIO LNG
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Fatty Acids & Sterne.
//                           </NavLink>
//                         </li>
//                         <li>
//                           <NavLink class="dropdown-item" to="/">
//                             Palm Oil & used Cooking Oil
//                           </NavLink>
//                         </li>
//                       </ul>
//                     </li>
//                     <li>
//                       <NavLink class="dropdown-item" to="/">
//                         Minerals & Ores
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink class="dropdown-item" to="/">
//                         Metals
//                       </NavLink>
//                     </li>

//                     <li>
//                       <NavLink class="dropdown-item" to="/">
//                         Building Materials & Chemicals
//                       </NavLink>
//                     </li>
//                   </ul>
//                 </li>
//                 <li class="nav-item">
//                   <NavLink class="nav-NavLink" to="/">
//                     Services
//                   </NavLink>
//                 </li>{" "}
//                 <li class="nav-item">
//                   <NavLink class="nav-NavLink" to="/">
//                     Contact Us
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;




import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
              src="./assets/images/logos/bbvmg_logo.webp"
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
            className={openMenu ? "offcanvas offcanvas-end text-bg-light show" : "offcanvas offcanvas-end text-bg-light"}
            tabindex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div class="offcanvas-header ">
              <img
                src="./assets/images/logos/bbvmg_logo.webp"
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
                  <NavLink class="nav-NavLink active" aria-current="page" to="#" onClick={() => setOpenMenu(false)}>
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-NavLink" to="#" onClick={() => setOpenMenu(false)}>
                    About Us
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
                      Products <i class="bi bi-chevron-down fw-bold"></i>
                    </div>
                  </NavLink>
                  <ul class="dropdown-menu">
                    <li>
                      <NavLink class="dropdown-item" to="/">
                        Agro Commodities
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="/">
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
                          <NavLink class="dropdown-item" to="/polymers" onClick={() => setOpenMenu(false)}>
                            Polymers
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Solvents
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Chemicals & Intermediates
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Speciality Chemicals
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
                          Petroleum & Oil Products{" "}
                          <i class="bi bi-chevron-down fw-bold"></i>
                        </div>
                      </NavLink>
                      <ul class="dropdown-menu">
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Aviation Fuel (JetFuel)
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            D2 Gas Oil
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            D6 Diesel Bunker Fuel
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            EN-590 Diesel ULSD
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Fuel Oil
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Crude Oil
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Mazut
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Liquefied Petroleum Gas
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Liquefied Natural Gas
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Petroleum Coke (PETCOKE)
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Bitumen (Asphalt)
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
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
                              <NavLink class="dropdown-item" to="/">
                                Rice Husk
                              </NavLink>
                            </li>
                            <li>
                              <NavLink class="dropdown-item" to="/">
                                Yellow Maize
                              </NavLink>
                            </li>
                            <li>
                              <NavLink class="dropdown-item" to="/">
                                Soyabean
                              </NavLink>
                            </li>
                            <li>
                              <NavLink class="dropdown-item" to="/">
                                NON GMO
                              </NavLink>
                            </li>
                            <li>
                              <NavLink class="dropdown-item" to="/">
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
                              <NavLink class="dropdown-item" to="/">
                                Urea N46 – Granular / Prilled
                              </NavLink>
                            </li>
                            <li>
                              <NavLink class="dropdown-item" to="/">
                                DAP & MAP
                              </NavLink>
                            </li>
                            <li>
                              <NavLink class="dropdown-item" to="/">
                                Complex & Soluble Fertilizers
                              </NavLink>
                            </li>
                            <li>
                              <NavLink class="dropdown-item" to="/">
                                Potash & NPK
                              </NavLink>
                            </li>
                            <li>
                              <NavLink class="dropdown-item" to="/">
                                Bio NPK & Bio DAP
                              </NavLink>
                            </li>
                            <li>
                              <NavLink class="dropdown-item" to="/">
                                Bio PROM
                              </NavLink>
                            </li>
                            <li>
                              <NavLink class="dropdown-item" to="/">
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
                          <NavLink class="dropdown-item" to="/">
                            BioDiesel
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Ethanol
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            BIO LNG
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Fatty Acids & Sterne.
                          </NavLink>
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="/">
                            Palm Oil & used Cooking Oil
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="/">
                        Minerals & Ores
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="/">
                        Metals
                      </NavLink>
                    </li>

                    <li>
                      <NavLink class="dropdown-item" to="/">
                        Building Materials & Chemicals
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-NavLink" to="/">
                    Services
                  </NavLink>
                </li>{" "}
                <li class="nav-item">
                  <NavLink class="nav-NavLink" to="/">
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


