import { useState } from "react";
import Form from "../form/Form";
import OpenModel from "../openModel/OpenModel";
import { updateUser } from "../../Utils";
const EditUser = ({ handelClick, open,userId }) => {
  const [formData, setFormData] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
   await updateUser(userId,formData);
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
            { name: "username", type: "text" },
            { name: "email", type: "email" },
            { name: "phone", type: "phone" },
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

export default EditUser;
