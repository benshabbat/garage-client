import React, { useState } from "react";
import "./reviews.css";
import CreateReviews from "../createReviews/CreateReviews";

const Reviews = () => {
  const [openModel, setOpenModel] = useState(false);
  const handelClick = () => {
      setOpenModel(!openModel);
    };
  
  const reviewsCustomers = [
    {
      name: "tal",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,",
      stars: 4,
    },
    {
      name: "yossi",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,",
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
        {reviewsCustomers.map((customer, index) => {
          return (
            <div className="one-review" key={index}>
              <h1>{customer.name}</h1>
              <div className="stars">
                <div className="star" />
                <div className="star" />
                <div className="star" />
              </div>
              <div className="desc">{customer.desc}</div>
            </div>
          );
        })}
      </div>
      <button onClick={handelClick}>Add Review</button>
      {openModel && (
        <CreateReviews handelClick={handelClick}/>
      )}
    </div>
  );
};

export default Reviews;
