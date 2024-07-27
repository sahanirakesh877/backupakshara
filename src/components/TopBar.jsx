import React from "react";


const TopBar = () => {
  return (
    <>
      <div className="container-fluid d-none d-lg-block ">
        <div className="row d-flex  justify-content-center border align-items-center py-2 px-xl-5">
          <div className="col-md-3">
            <a href="#" className="text-decoration-none ">
              <img
                src="./akasharalogo.png"
                alt="Akshara School"
                className=""
                style={{ maxWidth: "160px", maxHeight: "100px" }}
              />
            </a>
          </div>
          <div className=" col-md-9">
            <div className="row d-flex align-items-center justify-content-between">
            {/* office location */}
                <div className="d-flex flex-column align-items-start   mb-lg-0 col-lg-4 ">
                  <h6 className="top-head mb-0 ">
                    <i
                      className="fas fa-map-marker-alt
                    top-icon   me-1"
                    ></i>
                    Our Office
                  </h6>
                  <small className="top-p">
                  Kandaghari, Kageshwori Manohara 9, KTM
                  </small>
                </div>

                 {/* email  */}
              <div className="d-flex flex-column align-items-start   mb-lg-0 col-lg-3 ">
                  <h6 className="top-head mb-0 ">
                    <i
                      className="fas fa-message
                    top-icon   me-1"
                    ></i>
                    Email Us
                  </h6>
                  <small className="top-p">
                  info@aksharaaschool.edu.np
                  </small>
                </div>


                  {/* phone  */}
              <div className="d-flex flex-column align-items-start   mb-lg-0 col-lg-3 ">
                  <h6 className="top-head mb-0 ">
                    <i
                      className="fas fa-phone
                    top-icon   me-1"
                    ></i>
                  Call Us
                  </h6>
                  <small className="top-p">
                  +977-01-4993031/32/33
                  </small>
                </div>


              <div className="mb-lg-0 m-md-0 p-md-0 p-lg-0 p-lg-0 col-lg-2 d-flex align-items-center justify-content-start ">
                <div className="d-flex justify-content-lg-around   gap-1 m-md-0 p-md-0 p-lg-0 p-lg-0">
                  <a href="#" className="text-decoration-none head-icons">
                    <i className="fa-brands fa-facebook    facebook "></i>
                  </a>
                  <a href="#" className="text-decoration-none head-icons">
                    <i className="fa-brands fa-instagram   instagram "></i>
                  </a>
                  <a href="#" className="text-decoration-none head-icons">
                    <i className="fa-brands fa-whatsapp  whatsapp "></i>
                  </a>
                  <a href="#" className="text-decoration-none head-icons">
                    <i className="fa-brands fa-youtube   youtube"></i>
                  </a>
                  <a href="#" className="text-decoration-none head-icons">
                    <i className="fa-brands fa-linkedin  facebook "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
