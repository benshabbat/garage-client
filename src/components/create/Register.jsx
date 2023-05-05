import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { Form, OpenModel } from "..";

const Register= ({ handelClick, isOpen }) => {
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    dispatch(register(formData));
    handelClick();
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
      isOpen={isOpen}
    />
  );
};

export default Register;
