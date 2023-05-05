import { useState } from "react";
import { Form, OpenModel } from "../index";
import { updateService } from "../../Utils";
const EditService = ({ handelClick, isOpen, service }) => {
  
  const [formData, setFormData] = useState(service);
  const onSubmit = async (e) => {
    e.preventDefault();
    await updateService(service?._id, formData);
    handelClick();
  };

  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Edit Car"
          sec_title="enter your name & password"
          inputs={[
            { name: "numberPlate", type: "text", value: service?.car?.numberPlate },
            { name: "title", type: "text", value:formData?.title },
            { name: "description", type: "text", value: formData?.description },
            { name: "price", type: "number", value: formData?.price },
            { name: "paid", type: "text", value: formData?.paid },
            { name: "status", type: "text", value: formData?.status },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default EditService;
