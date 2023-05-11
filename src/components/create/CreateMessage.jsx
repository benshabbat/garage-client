import { useState } from "react";
import { OpenModel, Form } from "..";
import { createMessage } from "../../Utils";
const CreateMessage = ({ handelClick, isOpen, user }) => {
  const [formData, setFormData] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    await createMessage(formData);
    handelClick();
  };

  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Create Car"
          inputs={[
            { name: "title", type: "text" },
            { name: "description", type: "text" },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default CreateMessage;
