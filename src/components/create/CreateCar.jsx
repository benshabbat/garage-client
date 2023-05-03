import { useState } from "react";
import { OpenModel, Form } from "..";
import { createCar } from "../../Utils";
const CreateCar = ({ handelClick, open,userId }) => {
  const [formData, setFormData] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
   await createCar(userId,formData);
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
      open={open}
    />
  );
};

export default CreateCar;
