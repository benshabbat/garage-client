import { useState } from "react";
import { OpenModel, Form } from "..";
import { createCar } from "../../Utils";
const CreateCar = ({ handelClick, isOpen,user }) => {
  const [formData, setFormData] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
   await createCar(user?._id,formData);
    handelClick();
  };

  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Create Car"
          inputs={[
            // { name: "username", type: "text" },
            { name: "numberPlate", type: "text" },
            { name: "km", type: "number" },
            { name: "brand", type: "text" },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default CreateCar;
