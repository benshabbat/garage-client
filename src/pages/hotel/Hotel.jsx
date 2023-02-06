import React, { useContext, useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import { SearchContext } from "../../context/SearchContext";
import { parseWithOptions } from "date-fns/fp";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideIndex, setSlideIndex] = useState(0);
  const [openImage, setOpenImage] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    if (user) {
      setOpenModal(true)
    } else {
      navigate("/login");
    }
  };

  const { date, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDiffernce = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const dayDiff = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return dayDiff;
  };

  const days = dayDiffernce(date[0].startDate, date[0].endDate);

  const handleOpen = (i) => {
    setSlideIndex(i);
    setOpenImage(true);
  };
  const handleMove = (direction) => {
    let newSlideIndex = slideIndex;
    direction === "left" ? (newSlideIndex -= 1) : (newSlideIndex += 1);
    if (newSlideIndex === data?.photos.length) newSlideIndex = 0;
    if (newSlideIndex === -1) newSlideIndex = data?.photos.length - 1;
    setSlideIndex(newSlideIndex);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading"
      ) : (
        <div className="hotel-container">
          {openImage && (
            <div className="hotel-slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpenImage(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("left")}
              />
              <div className="slider-wrapper">
                <img
                  src={data?.photos[slideIndex]}
                  alt=""
                  className="slide-img"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("right")}
              />
            </div>
          )}
          <div className="hotel-wrapper">
            <button onClick={handleClick} className="book-now">Reserve or book now</button>
            <h1 className="hotel-title">{data.name}</h1>
            <div className="hotel-address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span> {data.address}</span>
            </div>
            <span className="hotel-distance">
              Excellent location - {data.distance}m from center
            </span>
            <span className="hotel-price-highlight">
              book a stay over {data.cheapestPrice}$ at this property and get a
              free airport taxi
            </span>
            <div className="hotel-images">
              {data?.photos?.map((photo, index) => {
                return (
                  <div key={index} className="hotel-image-wrapper">
                    <img
                      onClick={() => handleOpen(index)}
                      src={photo}
                      alt=""
                      className="hotel-img"
                    />
                  </div>
                );
              })}
            </div>
            <div className="hotel-details">
              <div className="hotel-details-texts">
                <h1 className="hotel-title">{data.title}</h1>
                <p className="hotel-details-desc">{data.desc}</p>
              </div>
              <div className="hotel-details-price">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>location hotel</span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b>({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or book now</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve hotelId={id} setOpenModal={setOpenModal}/>}
    </div>
  );
};

export default Hotel;
