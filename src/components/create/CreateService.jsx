import { useState } from "react";
import { OpenModel, Form } from "..";
import { createService } from "../../Utils";
const CreateService = ({ handelClick, isOpen, car }) => {
  const [formData, setFormData] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    await createService(car?._id, formData);
    handelClick();
  };

  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Create Service"
          inputs={[
            // { name: "numberPlate", type: "text" },
            { name: "title", type: "text" },
            { name: "description", type: "text" },
            { name: "price", type: "number" },
            { name: "paid", type: "boolean" },
            { name: "status", type: "text" },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default CreateService;
