// import React, { useEffect } from "react";
// import "../css/Head.css";
// import { Link, useLocation } from "react-router-dom";
// import EnquiryModel from "./EnquiryModel";

// const Head = () => {
//   const location=useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);
//   return (
//     <>
//       <header className=" ">
//         <div className="container mx-auto ">
//           <div className="row d-flex align-items-center  ">
//             <nav className="navbar navbar-expand-lg navbar-light ">
//               {/* <div className=""> */}
//               <Link
//                 className="navbar-brand d-md-block d-sm-block d-lg-none"
//                 to="/"
//               >
//                 <img
//                   src="/white-logo.png"
//                   alt="Akshara Logo"
//                   className="img-fluid navbar-logo"
//                 />
//               </Link>
//               <button
//                 className="navbar-toggler "
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNav"
//                 aria-controls="navbarNav"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 {/* <span className="navbar-toggler-icon " /> */}
//                 <span className="navbar-toggler-icons ">
//                   <i class="fa-solid fa-bars"></i>
//                 </span>
//               </button>

//               <div className="collapse navbar-collapse " id="navbarNav">
//                 <ul className="navbar-nav mx-auto   ">
//                   <li className="nav-item active   py-2 ">
//                     <Link className="nav-link " to="/">
//                       Home
//                     </Link>
//                   </li>
//                   <li className="nav-item dropdown   py-2 ">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       id="navbarDropdown"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       About Us
//                     </a>
//                     <ul
//                       className="dropdown-menu"
//                       aria-labelledby="navbarDropdown"
//                     >
//                       <li>
//                         <Link className="dropdown-item" to="/about">
//                           Introduction
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="/about">
//                           Akshara Infrastructure
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="/about/lrpa">
//                           LRPA approach
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="/about/chairman">
//                           Message From Chairman
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="/about/principal">
//                           Message From Principal
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="/about/team">
//                           Team
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="nav-item dropdown   py-2 ">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       id="navbarDropdown"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       Academic
//                     </a>
//                     <ul
//                       className="dropdown-menu"
//                       aria-labelledby="navbarDropdown"
//                     >
//                       <li>
//                         <Link
//                           className="dropdown-item"
//                           to="/academics/kindergarten"
//                         >
//                           Kindergarten
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           className="dropdown-item"
//                           to="/academics/elementary"
//                         >
//                           Elementary School
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="/academics/middle">
//                           Middle School
//                         </Link>
//                       </li>

//                       <li>
//                         <Link className="dropdown-item" to="/academics/high">
//                           High School
//                         </Link>
//                       </li>

//                       <li>
//                         <Link className="dropdown-item" to="/admission/policy">
//                           Admission Policy
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           className="dropdown-item"
//                           to="/admission/procedure"
//                         >
//                           Admission Procedure
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

              

//                   <li className="nav-item py-2  ">
//                     <Link className="nav-link" to="/news">
//                       News & Activities
//                     </Link>
//                   </li>

            

//                   <li className="nav-item  py-2  ">
//                     <Link className="nav-link" to="/contact">
//                       Contact
//                     </Link>
//                   </li>

//                   <li className="nav-item dropdown  flex-row  py-2  ">
//                     <a
//                       className="nav-link dropdown-toggle  "
//                       href="#"
//                       id="navbarDropdown"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       <i class="fa-solid fa-bars "></i>
//                     </a>
//                     <ul
//                       className="dropdown-menu"
//                       aria-labelledby="navbarDropdown"
//                     >
//                       <li>
//                         <Link className="dropdown-item" to="/photos">
//                           <i className="fa-solid fa-photo-video me-1"></i>
//                           Gallery
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="/downloads">
//                           <i className="fa-solid fa-download me-1"></i>
//                           Download
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="/apply-online">
//                           <i className="fa-solid fa-user-plus me-1"></i>Apply
//                           Online
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="/career">
//                           <i className="fa-solid fa-briefcase me-1"></i>Career
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="  py-2  ms-md-5">
//                       <button
//                         className="head-btn  rounded-pill animated-button "
//                         data-bs-toggle="modal"
//                         role="button"
//                         data-bs-target="#EnquiryModel"
//                       >
//                         Get Started
//                       </button>
            
//                       <EnquiryModel />
//                     </li>
//                 </ul>
//               </div>
// {/* 
//            <div>
//            <button
//                 className="head-btn  rounded-pill animated-button "
//                 data-bs-toggle="modal"
//                 role="button"
//                 data-bs-target="#EnquiryModel"
//               >
//                 Get Started
//               </button>
//               <EnquiryModel />
//            </div> */}

//               {/* </div> */}
//             </nav>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Head;
import React, { useEffect, useState } from "react";
import "../css/Head.css";
import { Link, useLocation } from "react-router-dom";
import EnquiryModel from "./EnquiryModel";

const Head = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <header className=" ">
        <div className="container mx-auto ">
          <div className="row d-flex align-items-center  ">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <Link
                className="navbar-brand d-md-block d-sm-block d-lg-none"
                to="/"
              >
                <img
                  src="/white-logo.png"
                  alt="Akshara Logo"
                  className="img-fluid navbar-logo"
                />
              </Link>
              <button
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleNavToggle}
              >
                <span className="navbar-toggler-icons ">
                  <i className="fa-solid fa-bars"></i>
                </span>
              </button>

              {/* <div className="collapse navbar-collapse " id="navbarNav"> */}
              <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarNav">
                <ul className="navbar-nav mx-auto   ">
                  <li className="nav-item active   py-2 ">
                    <Link className="nav-link " to="/" onClick={closeNav}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown   py-2 ">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About Us
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/about"
                          onClick={closeNav}
                        >
                          Introduction
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/about"
                          onClick={closeNav}
                        >
                          Akshara Infrastructure
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/about/lrpa"
                          onClick={closeNav}
                        >
                          LRPA approach
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/about/chairman"
                          onClick={closeNav}
                        >
                          Message From Chairman
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/about/principal"
                          onClick={closeNav}
                        >
                          Message From Principal
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/about/team"
                          onClick={closeNav}
                        >
                          Team
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown   py-2 ">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Academic
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/academics/kindergarten"
                          onClick={closeNav}
                        >
                          Kindergarten
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/academics/elementary"
                          onClick={closeNav}
                        >
                          Elementary School
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/academics/middle"
                          onClick={closeNav}
                        >
                          Middle School
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="dropdown-item"
                          to="/academics/high"
                          onClick={closeNav}
                        >
                          High School
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="dropdown-item"
                          to="/admission/policy"
                          onClick={closeNav}
                        >
                          Admission Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/admission/procedure"
                          onClick={closeNav}
                        >
                          Admission Procedure
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item py-2  ">
                    <Link
                      className="nav-link"
                      to="/news"
                      onClick={closeNav}
                    >
                      News & Activities
                    </Link>
                  </li>

                  <li className="nav-item  py-2  ">
                    <Link
                      className="nav-link"
                      to="/contact"
                      onClick={closeNav}
                    >
                      Contact
                    </Link>
                  </li>

                  <li className="nav-item dropdown  flex-row  py-2  ">
                    <a
                      className="nav-link dropdown-toggle  "
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-bars "></i>
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/photos"
                          onClick={closeNav}
                        >
                          <i className="fa-solid fa-photo-video me-1"></i>
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/downloads"
                          onClick={closeNav}
                        >
                          <i className="fa-solid fa-download me-1"></i>
                          Download
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/apply-online"
                          onClick={closeNav}
                        >
                          <i className="fa-solid fa-user-plus me-1"></i>Apply
                          Online
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/career"
                          onClick={closeNav}
                        >
                          <i className="fa-solid fa-briefcase me-1"></i>Career
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="  py-2  ms-md-5">
                    <button
                      className="head-btn  rounded-pill animated-button "
                      data-bs-toggle="modal"
                      role="button"
                      data-bs-target="#EnquiryModel"
                    >
                      Get Started
                    </button>

                    <EnquiryModel />
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Head;
