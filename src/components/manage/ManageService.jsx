import "./manage.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "../../features/admin/adminSlice";
import CancelIcon from "@mui/icons-material/Cancel";
import { deleteService } from "../../Utils";
import useOpenModel from "../../hooks/useOpenModel";
import { OpenModel} from "../index";
import EditService from "../edit/EditService";
const ManageService = ({
  handelClick: handelClickManage = null,
  isOpen,
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
            <h2>{`Hello ${service?.car?.numberPlate}`}</h2>
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
          <EditService
            serviceId={serviceId}
            handelClick={handleEditService}
            open={openModelEditService}
          />
        </>
      }
      isOpen={isOpen}
    />
  );
};

export default ManageService;
