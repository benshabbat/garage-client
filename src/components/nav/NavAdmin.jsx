import React from "react";
import { Link } from "react-router-dom";
import useOpenModel from "../../hooks/useOpenModel";
import { Register, CreateCar } from "..";
const NavAdmin = () => {
  const [handleCreateUser, isOpenCreateUser] = useOpenModel();
  const [handleCreateCar, isOpenCreateCar] = useOpenModel();
  return (
    <>
      <Link to="/">
        <div className="item-nav">
          <button onClick={handleCreateUser}>Create User</button>
          <Register handelClick={handleCreateUser} isOpen={isOpenCreateUser} />
        </div>
      </Link>
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
          <button onClick={handleCreateCar}>Create Car</button>
          <CreateCar handelClick={handleCreateCar} isOpen={isOpenCreateCar} />
        </div>
      </Link>
    </>
  );
};

export default NavAdmin;
