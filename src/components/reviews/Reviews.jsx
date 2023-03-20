import React, { useState } from "react";
import "./reviews.css";
import CreateReviews from "../createReviews/CreateReviews";
import { Rating } from "@mui/material";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/navigation";

const Reviews = () => {
  const [openModel, setOpenModel] = useState(false);
  const handelClick = () => {
    setOpenModel(!openModel);
  };

  const reviewsCustomers = [
    {
      name: "tal",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      stars: 4,
    },
    {
      name: "yossi",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      stars: 3,
    },
    {
      name: "dana",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
      stars: 5,
    },
    {
      name: "moshe",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.",
      stars: 4,
    },
  ];

  return (
    <div id="reviews" className="reviews">
      <h1>Reviews</h1>
      <div className="reviews-container">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween:10
            },
            480: {
              slidesPerView: 2,
              spaceBetween:10
            },
            768: {
              slidesPerView: 3,
              spaceBetween:15
            },
            1024: {
              slidesPerView: 4,
              spaceBetween:20
            },
          }}
        >
          {reviewsCustomers.map((customer, index) => {
            return (
              <SwiperSlide>
                <div className="one-review" key={index}>
                  <h1>{customer.name}</h1>
                  <Rating
                    // style={{ fontSize: 45, top: "15px" }}
                    value={customer.stars}
                    readOnly
                  />
                  <div className="desc">{customer.desc}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <button onClick={handelClick}>Add Review</button>
      {openModel && <CreateReviews handelClick={handelClick} />}
    </div>
  );
};

export default Reviews;
