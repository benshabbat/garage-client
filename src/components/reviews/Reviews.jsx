import "./reviews.css";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import CreateReviews from "../createReviews/CreateReviews";
import Review from "../review/Review";
import Carousel from "react-multi-carousel";

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
    {
      name: "menachem",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      stars: 5,
    },
    {
      name: "david",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
      stars: 1,
    },
    {
      name: "avraham",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.",
      stars: 4,
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 564 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="reviews" className="reviews">
      <h1>Reviews</h1>
      <div>
        <Carousel infinite={true} responsive={responsive}>
          {reviewsCustomers.map((customer, index) => {
            return <Review customer={customer} key={index} />;
          })}
        </Carousel>
      </div>
      <button onClick={handelClick}>Add Review</button>
      {openModel && <CreateReviews handelClick={handelClick} />}
    </div>
  );
};

export default Reviews;
