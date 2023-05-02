import { useState } from "react";
import { Form, OpenModel } from "../index";
import { useSelector } from "react-redux";
import { updateCar } from "../../Utils";
const EditCar = ({ handelClick, open, carId }) => {
  const { cars } = useSelector((state) => state.admin);
  const car = cars.find((car) => car._id === carId);
  const [formData, setFormData] = useState(car);
  const onSubmit = async (e) => {
    e.preventDefault();
    await updateCar(carId, formData);
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
            { name: "numberPlate", type: "text", value: formData?.numberPlate },
            { name: "km", type: "number", value: formData?.km },
            { name: "brand", type: "text", value: formData?.brand },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      open={open}
    />
  );
};

export default EditCar;
