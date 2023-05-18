import { useState } from "react";
import { OpenModel, Form } from "..";
import { createMessage,createMessageToAdmin } from "../../Utils";

const CreateMessage = ({ handelClick, isOpen ,user,users }) => {
  const [formData, setFormData] = useState({
    from: user?._id,
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    if(user?.isAdmin){await createMessage(formData,formData?.to);}
    else {await createMessageToAdmin(formData);}
    handelClick();
  };
  let usersName = null
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
          options={usersName}
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
