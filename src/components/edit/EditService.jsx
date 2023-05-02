import { useState } from "react";
import { Form, OpenModel } from "../index";
import { useSelector } from "react-redux";
import { updateService } from "../../Utils";
const EditService = ({ handelClick, open, serviceId }) => {
  const { services } = useSelector((state) => state.admin);
  const service = services.find((service) => service._id === serviceId);
  const [formData, setFormData] = useState(service);
  const onSubmit = async (e) => {
    e.preventDefault();
    await updateService(serviceId, formData);
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
      open={open}
    />
  );
};

export default EditService;
