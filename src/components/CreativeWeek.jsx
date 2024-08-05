import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../css/Creative.css";
import { fetchNotices } from "../redux/Notice/NoticeSlice";




const CreativeWeek = () => {
  const dispatch = useDispatch();
  const { notices, loading, error } = useSelector((state) => state.notices);
  console.log("notice image ",notices)
  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
    whatsapp: `https://api.whatsapp.com/send?text=${window.location.href}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${window.location.href}&title=Check%20out%20this%20event!`,
    twitter: `https://twitter.com/share?url=${window.location.href}&text=Check%20out%20this%20event!`
  };


  const carouselRef = useRef(null);

  
  const brandImg = [
    "/school/banner1.jpg",
    "/school/banner2.jpg",
    "/school/banner3.jpg",
    "/school/banner4.jpg",
    "/school/banner5.jpg",
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = brandImg.map((img, index) => (
    <div className="creative-item card border-0 p-3 m-md-0 p-md-1" key={index}>
      <div className="img-container">
        <img
          src={img}
          alt={`Brand ${index + 1}`}
          className="card-img-top img-fluid"
        />
      </div>
      <div className="card-body my-md-0  border position-relative">
        <h5 className="text-danger my-md-0 d-inline">Annual Function</h5>
        <p className="creative-text my-md-0 pb-5">
          Join us for an exciting lineup of workshops and seminars that will
          inspire and empower you! Don't miss out on our annual college
          fest—packed with fun activities, competitions, and unforgettable
          experiences.
        </p>
        <div className="btn_wraps position-absolute end-0 bottom-0 my-2 me-3">
          <span className="share">
            Share <i className="fa-solid fa-share"></i>
          </span>
          <div className="share-icon">
  <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-f creative_i" />
  </a>
  <a href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-whatsapp creative_i" />
  </a>
  <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin creative_i" />
  </a>
  <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter creative_i" />
  </a>
</div>

        </div>
      </div>
    </div>
  ));



  return (
    <>
      <div className="demo">
        <div className="container ">
          <div className="row py-5">

            <div className="col-lg-6 col-md-12 mb-4">
              <h2 className="text-center border-bottom-title w-100 head-color mb-5">
                <span className="addcolor">Creatives Of </span> This Week
              </h2>
              <AliceCarousel
              ref={carouselRef}
                mouseTracking
                items={items}
                autoPlay={false}
                infinite={true}
                autoPlayDirection="rtl"
                responsive={responsive}
                controlsStrategy="alternate"
                animationDuration={1000} 
                disableDotsControls={true}
                disableButtonsControls={true}
              />
                  {/* Custom Previous Button */}
                  <button
                className="custom-prev-btn"
                onClick={() => carouselRef.current?.slidePrev()}
              >
                {/* &#8249; */}
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
              </button>
              {/* Custom Next Button */}
              <button
                className="custom-next-btn"
                onClick={() => carouselRef.current?.slideNext()}
              >
               <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
            {/*  important  notices  */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h2 className="text-center border-bottom-title w-100 head-color mb-5">
                <span className="addcolor">Important </span> Notice
              </h2>
              <div className="creative-items border">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && notices.length > 0 && (
                  <img
                
                    src={`http://localhost:5000/${notices[0].images.replace(/\\/g, '/')}`}
                    alt="Important Notice"
                    className="img-fluid"
                  />
                )}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeWeek;



