import "./manage.css";
import React from "react";
import { useSelector } from "react-redux";
import OpenModel from "../openModel/OpenModel";
import CancelIcon from "@mui/icons-material/Cancel";
import { deleteUser } from "../../Utils";
import useOpenModel from "../../hooks/useOpenModel";
import CreateCar from "../createCar/CreateCar";

const Manage = ({ handelClick = null, open, userId = null }) => {
  const { users } = useSelector((state) => state.admin);
  const {
    openModel: openModelCreateCar,
    handelClick: handleCreateCar,
    setOpenModel: setOpenModelCreateCar,
  } = useOpenModel();

  const user = users.find((user) => user._id === userId);
  console.log(user);
  const handleUserID = async (e) => {
    e.preventDefault();
    const { name } = e.target;
    if (name === "createCar") setOpenModelCreateCar((current) => !current);
    if (name === "deleteUser") {await deleteUser(userId); handelClick();}
    // if(name==="editUser") setOpenModelEditUser((current) => !current);
  };

  return (
    <OpenModel
      comp={
        <>
          <form className="form">
            {handelClick && (
              <CancelIcon onClick={handelClick} className="form-close" />
            )}
            <h1 className="header">Manage Admin</h1>
            <h2>{`Hello ${user?.username}`}</h2>
            <label className="form-label">
              <button
                name="createCar"
                className="create-car"
                onClick={handleUserID}
              >
                Create Car
              </button>
            </label>
            <label className="form-label">
              <button
                name="editUser"
                className="edit-user"
                onClick={handleUserID}
              >
                Edit User
              </button>
            </label>
            <label className="form-label">
              <button
                name="deleteUser"
                className="delete-user"
                onClick={handleUserID}
              >
                Delete User
              </button>
            </label>
          </form>
          <CreateCar
            userId={userId}
            handelClick={handleCreateCar}
            open={openModelCreateCar}
          />
        </>
      }
      open={open}
    />
  );
};

export default Manage;
