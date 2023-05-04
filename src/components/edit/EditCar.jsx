import { useState } from "react";
import { Form, OpenModel } from "../index";
import { useSelector } from "react-redux";
import { updateCar } from "../../Utils";
const EditCar = ({ handelClick, isOpen, car }) => {
  // const { cars } = useSelector((state) => state.admin);
  // const car = cars.find((car) => car._id === carId);
  const [formData, setFormData] = useState(car);
  const onSubmit = async (e) => {
    e.preventDefault();
    await updateCar(car?._id, formData);
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
            { name: "km", type: "number", value: formData?.km ,min:formData?.km },
            { name: "brand", type: "text", value: formData?.brand },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default EditCar;
