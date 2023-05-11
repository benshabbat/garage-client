import { useState } from "react";
import { OpenModel, Form } from "..";
import { createMessage } from "../../Utils";
import { useSelector } from "react-redux";
const CreateMessage = ({ handelClick, isOpen }) => {
  const { user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    from: user?._id,
  });
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
