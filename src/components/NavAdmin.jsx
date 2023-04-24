import React from 'react'
import { Link } from "react-router-dom";
import useOpenModel from "../hooks/useOpenModel";
import Register from "../components/register/Register"
const NavAdmin = () => {
  const { openModel, handelClick,setOpenModel } = useOpenModel();
  return (
    <>
       <div className="item-nav">
        <button onClick={handelClick}>Create User</button>
        <Register handelClick={handelClick} open={openModel} setOpen={setOpenModel} />
      </div>
    {/* <div className="item-nav">
      <Link to={`/services/user`}>Create Car</Link>
    </div> */}
    {/* <div className="item-nav">
      <Link to={`/account`}>Create User</Link>
    </div> */}
    {/* <div className="item-nav">
      <Link to={`/messages`}>Users</Link>
    </div> */}
  </>
  )
}

export default NavAdmin