import React from 'react'
import {Link} from "react-router-dom"
import useOpenModel from "../hooks/useOpenModel";
import {Register,CreateCar} from "../components"
const NavAdmin = () => {
  const { openModel, handelClick,setOpenModel } = useOpenModel();
  return (
    <>
    <Link to="/">
       <div className="item-nav">
        <button onClick={handelClick}>Create User</button>
        <Register handelClick={handelClick} open={openModel} setOpen={setOpenModel} />
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
        <button onClick={handelClick}>Create Car</button>
        <CreateCar handelClick={handelClick} open={openModel} setOpen={setOpenModel} />
      </div>
      </Link>
  </>
  )
}

export default NavAdmin