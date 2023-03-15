import React, { useRef } from "react";
import "./createReviews.css";
const CreateReviews = ({ handelClick }) => {
  const nameRef = useRef();
  const descRef = useRef();
  const numRef = useRef();

  return (
    <div className="create-review">
      <div className="create-review-container">
        <form>
          <label>
            <span className="review-name">Name</span>
            <input ref={nameRef} type="text" title="Name" placeholder="type your name.." />
          </label>
          <label>
            <span className="review-star">Star</span>
            <input type="text" title="Star" placeholder="rank our garage" />
          </label>
          <label>
            <span className="review-desc">Description</span>
            <textarea ref={descRef}
              type="text"
              title="Description"
              row={8}
              placeholder="Write your review"
            />
          </label>
        </form>
        <button onClick={handelClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="review-close"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button className="btn" onClick={() => {console.log({name:nameRef.current.value, desc: descRef.current.value})}} >Add Reviews</button>
      </div>
    </div>
  );
};

export default CreateReviews;
