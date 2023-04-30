import { useState } from "react";
import Form from "../form/Form";
import OpenModel from "../openModel/OpenModel";
import { createCar } from "../../Utils";
const Register = ({ handelClick, open,userId }) => {
  const [formData, setFormData] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
   await createCar(userId,formData);
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
