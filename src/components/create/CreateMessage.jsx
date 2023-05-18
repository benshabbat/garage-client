import { useState } from "react";
import { OpenModel, Form } from "..";
import { createMessage } from "../../Utils";

const CreateMessage = ({ handelClick, isOpen ,user,users }) => {
  const [formData, setFormData] = useState({
    from: user?._id,
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    await createMessage(formData);
    handelClick();
  };
  let usersName = []
  if(user?.isAdmin) usersName = users.map(user=> user?.username)
  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Create Message"
          inputs={[
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
          ]}
          options={user?.isAdmin?usersName:null}
          nameSelect="to"
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default CreateMessage;
