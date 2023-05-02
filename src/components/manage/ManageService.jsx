import "./manage.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "../../features/admin/adminSlice";
import CancelIcon from "@mui/icons-material/Cancel";
import { deleteService } from "../../Utils";
import useOpenModel from "../../hooks/useOpenModel";
import { OpenModel} from "../index";
const ManageService = ({
  handelClick: handelClickManage = null,
  open,
  serviceId = null,
}) => {
  const { services } = useSelector((state) => state.admin);

  const {
    openModel: openModelEditService,
    handelClick: handleEditService,
    setOpenModel: setOpenModelEditService,
  } = useOpenModel();

  const dispatch = useDispatch();

  const service = services.find((service) => service._id === serviceId);
  const handleCarID = async (e) => {
    e.preventDefault();
    const { name } = e.target;
    if (name === "deleteService") {
      await deleteService(serviceId);
      handelClickManage();
    }
    if (name === "editService") {
      setOpenModelEditService((current) => !current);
    }
    dispatch(getServices());
    
  };

  return (
    <OpenModel
      comp={
        <>
          <form className="form">
            <CancelIcon onClick={handelClickManage} className="form-close" />
            <h1 className="header">Manage Admin</h1>
            {/* <h2>{`Hello ${service?.username}`}</h2> */}
            <label className="form-label">
              <button
                name="editService"
                className="edit"
                onClick={handleCarID}
              >
                Edit Service
              </button>
            </label>
            <label className="form-label">
              <button
                name="deleteService"
                className="delete"
                onClick={handleCarID}
              >
                Delete Service
              </button>
            </label>
          </form>
          {/* <EditService
            serviceId={serviceId}
            handelClick={handleEditService}
            open={openModelEditService}
          /> */}
        </>
      }
      open={open}
    />
  );
};

export default ManageService;
