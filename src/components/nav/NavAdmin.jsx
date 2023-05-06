import React from "react";
import { Link } from "react-router-dom";
import useOpenModel from "../../hooks/useOpenModel";
import {  CreateCar } from "..";
const NavAdmin = () => {

  const [handelCreateCar, isOpenCreateCar] = useOpenModel();
  return (
    <>
     
      <div className="item-nav">
        <Link to={`/users`}>Get Users</Link>
      </div>
      <div className="item-nav">
        <Link to={`/cars`}>Get Cars</Link>
      </div>
      <div className="item-nav">
        <Link to={`/services`}>Get Services</Link>
      </div>
      <Link to="/">
        <div className="item-nav">
          <button onClick={handelCreateCar}>Create Car</button>
          <CreateCar handelClick={handelCreateCar} isOpen={isOpenCreateCar} />
        </div>
      </Link>
    </>
  );
};

export default NavAdmin;
