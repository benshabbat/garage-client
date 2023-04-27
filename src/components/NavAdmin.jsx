import React from 'react'
import {Link} from "react-router-dom"
import useOpenModel from "../hooks/useOpenModel";
import Register from "../components/register/Register"
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
       {/* <div className="item-nav">
        <button onClick={handelClick}>Create Car</button>
        <Register handelClick={handelClick} open={openModel} setOpen={setOpenModel} />
      </div> */}
  </>
  )
}

export default NavAdmin