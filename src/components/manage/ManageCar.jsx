import "./manage.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../features/admin/adminSlice";
import CancelIcon from "@mui/icons-material/Cancel";
import { deleteCar } from "../../Utils";
import useOpenModel from "../../hooks/useOpenModel";
import { OpenModel, EditCar } from "../index";
const ManageCar = ({
  handelClick: handelClickManage = null,
  open,
  carId = null,
}) => {
  const { cars } = useSelector((state) => state.admin);

  const {
    openModel: openModelEditCar,
    handelClick: handleEditCarr,
    setOpenModel: setOpenModelEditCar,
  } = useOpenModel();

  const dispatch = useDispatch();

  const car = cars.find((car) => car._id === carId);
  const handleCarID = async (e) => {
    e.preventDefault();
    const { name } = e.target;
    if (name === "deleteCar") {
      await deleteCar(carId);
      handelClickManage();
    }
    if (name === "editCar") {
      setOpenModelEditCar((current) => !current);
    }
    dispatch(getCars());
    
  };

  return (
    <OpenModel
      comp={
        <>
          <form className="form">
            <CancelIcon onClick={handelClickManage} className="form-close" />
            <h1 className="header">Manage Admin</h1>
            <h2>{`Hello ${car?.owner?.username}`}</h2>
            <label className="form-label">
              <button
                name="editCar"
                className="edit-car"
                onClick={handleCarID}
              >
                Edit Car
              </button>
            </label>
            <label className="form-label">
              <button
                name="deleteCar"
                className="delete-car"
                onClick={handleCarID}
              >
                Delete Car
              </button>
            </label>
          </form>
          <EditCar
            userId={carId}
            handelClick={handleEditCarr}
            open={openModelEditCar}
          />
        </>
      }
      open={open}
    />
  );
};

export default ManageCar;
