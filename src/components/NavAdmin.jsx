import React from 'react'
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
        <button onClick={handelClick}>Create Car</button>
        <Register handelClick={handelClick} open={openModel} setOpen={setOpenModel} />
      </div> */}
  </>
  )
}

export default NavAdmin