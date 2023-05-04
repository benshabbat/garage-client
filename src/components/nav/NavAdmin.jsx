import React from 'react'
import {Link} from "react-router-dom"
import useOpenModel from "../../hooks/useOpenModel";
import {Register,CreateCar} from ".."
const NavAdmin = () => {
  const { isOpenModel:isOpenCreateUser, handelOpenModel:handleCreateUser,setIsOpenModel:setIsOpenCreateUser } = useOpenModel();
  const { isOpenModel:isOpenCreateCar, handelOpenModel:handleCreateCar,setIsOpenModel:setIsOpenCreateCar } = useOpenModel();
  return (
    <>
    <Link to="/">
       <div className="item-nav">
        <button onClick={handleCreateUser}>Create User</button>
        <Register handelClick={handleCreateUser} open={isOpenCreateUser} setOpen={setIsOpenCreateUser} />
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
        <CreateCar handelClick={handleCreateCar} open={isOpenCreateCar} setOpen={setIsOpenCreateCar} />
      </div>
      </Link>
  </>
  )
}

export default NavAdmin