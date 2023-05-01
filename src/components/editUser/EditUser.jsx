import { useState } from "react";
import Form from "../form/Form";
import OpenModel from "../openModel/OpenModel";
import { useSelector } from "react-redux";
import { updateUser } from "../../Utils";
const EditUser = ({ handelClick, open,userId }) => {
  const { users } = useSelector((state) => state.admin);
  const user = users.find((user) => user._id === userId);
  const [formData, setFormData] = useState(user);
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
          title="Edit User"
          sec_title="enter your name & password"
          inputs={[
            // { name: "username", type: "text" },
            { name: "username", type: "text" ,value:formData?.username},
            { name: "email", type: "email" ,value:formData?.email},
            { name: "phone", type: "phone" ,value:formData?.phone},
            { name: "password", type: "password" ,value:formData?.password},
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
