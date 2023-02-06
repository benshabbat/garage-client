import React, { useState } from "react";
import "./list.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

import { format, setWeek } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch.js";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 1}&max=${max || 999}`
  );
  const handleClick = () => {
    reFetch();
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-search-title">Search</h1>
            <div className="list-item">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="list-item">
              <label>Check-in Date</label>
              <span
                onClick={() => {
                  setOpenDate(!openDate);
                }}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="list-item">
              <label>Options</label>
              <div className="list-search-options">
                <div className="list-search-option-item">
                  <span className="list-search-option-text">
                    Min price <small>per night</small>
                  </span>
                  <input
                    className="list-search-option-input"
                    type="number"
                    onChange={(e) => setMin(e.target.value-1)}
                  />
                </div>
                <div className="list-search-option-item">
                  <span className="list-search-option-text">
                    Max price <small>per night</small>
                  </span>
                  <input
                    className="list-search-option-input"
                    type="number"
                    onChange={(e) => setMax(e.target.value+1)}
                  />
                </div>
                <div className="list-search-option-item">
                  <span className="list-search-option-text">Adult</span>
                  <input
                    className="list-search-option-input"
                    type="number"
                    min={1}
                    placeholder={options.adult}
                  />
                </div>
                <div className="list-search-option-item">
                  <span className="list-search-option-text">Children</span>
                  <input
                    className="list-search-option-input"
                    type="number"
                    min={0}
                    placeholder={options.children}
                  />
                </div>
                <div className="list-search-option-item">
                  <span className="list-search-option-text">Room</span>
                  <input
                    className="list-search-option-input"
                    type="number"
                    min={1}
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="list-result">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
