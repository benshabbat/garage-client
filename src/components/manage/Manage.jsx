import "./manage.css";
import React from "react";
import OpenModel from "../openModel/OpenModel";
import CancelIcon from "@mui/icons-material/Cancel";
import { getUser } from "../../Utils";
const Manage = ({handelClick = null, open, userId = null}) => {
  return (
    <OpenModel
      comp={
        <form className="form">
          {handelClick && (
            <CancelIcon onClick={handelClick} className="form-close" />
          )}
          <h1 className="header">Manage Admin</h1>
          <label className="form-label">
            <button className="create-car" onClick={() => {}}>
              Create Car
            </button>
          </label>
          <label className="form-label">
            <button className="edit-user" onClick={() => {}}>
              Edit User
            </button>
          </label>
          <label className="form-label">
            <button className="delete-user" onClick={() => {}}>
              Delete User
            </button>
          </label>
        </form>
      }
      open={open}
    />
  );
};

export default Manage;
