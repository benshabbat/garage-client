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
  isOpen,
  car = null,
}) => {
  // const { cars } = useSelector((state) => state.admin);

  const [handleEditCar, isOpenModelEditCar] = useOpenModel();

  const dispatch = useDispatch();

  // const car = cars.find((car) => car._id === carId);
  const handleCarID = async (e) => {
    e.preventDefault();
    const { name } = e.target;
    if (name === "deleteCar") {
      await deleteCar(car?._id, car?.owner._id.toString());
      handelClickManage();
    }
    if (name === "editCar") {
      handleEditCar();
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
              <button name="editCar" className="edit" onClick={handleCarID}>
                Edit Car
              </button>
            </label>
            <label className="form-label">
              <button name="deleteCar" className="delete" onClick={handleCarID}>
                Delete Car
              </button>
            </label>
          </form>
          <EditCar
            car={car}
            handelClick={handleEditCar}
            isOpen={isOpenModelEditCar}
          />
        </>
      }
      isOpen={isOpen}
    />
  );
};

export default ManageCar;
