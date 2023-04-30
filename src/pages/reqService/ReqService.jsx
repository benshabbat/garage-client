import "./reqService.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createReqService } from "../../features/user/userSlice";

import { OpenModel, Form } from "../../components";
const ReqService = ({ handelClick, carId, open }) => {
  const { user } = useSelector((state) => state.user);
  const ADMIN = "63e14deca4340e45d23f20b2";
  const [formData, setFormData] = useState({
    from: user._id,
    to: ADMIN,
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const car = user?.cars.find((c) => c._id === carId);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createReqService(formData));
  };
  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Login"
          sec_title="enter your name & password"
          inputs={[
            { name: "title", type: "text" },
            { name: "Description", type: "text", value: car?.numberPlate },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      open={open}
    />
  );
};

export default ReqService;
