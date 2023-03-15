import React from "react";
import "./reviews.css";

const Reviews = () => {
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
      <div className="reviews-container">
        {reviewsCustomers.map((customer) => {
          return (
            <div className="one-review">
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
      <div className="create-review"></div>
    </div>
  );
};

export default Reviews;
