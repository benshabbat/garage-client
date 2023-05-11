import { useState } from "react";
import { useSelector } from "react-redux";
import { createReqService } from "../../Utils";
import { OpenModel, Form } from "..";
const ReqService = ({ handelClick, carId, isOpen }) => {
  const { user } = useSelector((state) => state.user);
  const car = user?.cars.find((c) => c._id === carId);
  const [formData, setFormData] = useState({
    from: user?._id,
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      description: car?.numberPlate.toString(),
    }));
    if (formData?.description) {
      await createReqService(formData);
      handelClick();
    }
  };
  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Request Service"
          inputs={[
            { name: "title", type: "text" },
            {
              name: "description",
              type: "text",
              value: car?.numberPlate.toString(),
            },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default ReqService;
