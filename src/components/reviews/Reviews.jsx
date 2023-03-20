import React, { useState } from "react";
import "./reviews.css";
import CreateReviews from "../createReviews/CreateReviews";
import { Rating } from "@mui/material";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/navigation";

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
        <div className="reviews-slider">
          <div className="slide-wrapper">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {reviewsCustomers.map((customer, index) => {
                return (
                  <SwiperSlide className="one-review" key={index}>
                    <h1>{customer.name}</h1>
                    <Rating
                      // style={{ fontSize: 45, top: "15px" }}
                      value={customer.stars}
                      readOnly
                    />
                    <div className="desc">{customer.desc}</div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <button onClick={handelClick}>Add Review</button>
      {openModel && <CreateReviews handelClick={handelClick} />}
    </div>
  );
};

export default Reviews;
