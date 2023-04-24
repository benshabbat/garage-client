import { useState} from "react";
import {  useDispatch } from "react-redux";
import { register} from "../../features/auth/authSlice";
import Form from "../../components/form/Form";
import OpenModel from "../../components/openModel/OpenModel";
const Register = ({ handelClick, open }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Create User"
          sec_title="enter your name & password"
          inputs={[
            { name: "username", type: "text" },
            { name: "phone", type: "phone" },
            { name: "email", type: "email" },
            { name: "password", type: "password" },
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
