import React from 'react'
import {Link} from "react-router-dom"
import useOpenModel from "../hooks/useOpenModel";
import {Register,CreateCar} from "../components"
const NavAdmin = () => {
  const { openModel, handelClick,setOpenModel } = useOpenModel();
  const { openModel:openModel2, handelClick:handelClick2,setOpenModel:setOpenModel2 } = useOpenModel();
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
        <button onClick={handelClick2}>Create Car</button>
        <CreateCar handelClick={handelClick2} open={openModel2} setOpen={setOpenModel2} />
      </div>
      </Link>
  </>
  )
}

export default NavAdmin