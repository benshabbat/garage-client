import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCar, getUsers } from "../../features/admin/adminSlice";
import Form from "../form/Form";
import OpenModel from "../openModel/OpenModel";

const Register = ({ handelClick, open,userId }) => {
  // const { users } = useSelector((state) => state.admin);
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(getUsers());
    // const user = users.filter((user) => user.username === formData.owner);
    // console.log(formData);
    // setFormData(formData?.numberPlate, formData?.km, formData?.brand);
    // console.log(formData);
    // console.log(user?._id);
    dispatch(createCar(userId, formData));
    handelClick();
  };

  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Create Car"
          sec_title="enter your name & password"
          inputs={[
            // { name: "username", type: "text" },
            { name: "numberPlate", type: "text" },
            { name: "km", type: "number" },
            { name: "brand", type: "text" },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      open={open}
    />
  );
};

export default Register;
