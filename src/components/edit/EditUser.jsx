import { useState } from "react";
import { Form, OpenModel } from "../index";
import { updateUser } from "../../Utils";
const EditUser = ({ handelClick, isOpen, user }) => {
  const [formData, setFormData] = useState(user);
  const onSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user?._id, formData);
    handelClick();
  };

  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Edit User"
          sec_title="enter your name & password"
          inputs={[
            // { name: "username", type: "text" },
            { name: "username", type: "text", value: formData?.username },
            { name: "email", type: "email", value: formData?.email },
            {
              name: "phone",
              type: "phone",
              value: formData?.phone,
              pattern: "[0-9]{3}[-][0-9]{7}|[0-9]{10}",
              title: "Number of phone must 050-1234567",
            },
            { name: "password", type: "password", value: formData?.password },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default EditUser;
