import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getServicesByIdCar,
  getServicesByIdUser,
} from "../../features/user/userSlice";
import { useParams } from "react-router-dom";
import Service from "../../components/service/Service";

const Services = () => {
  const { services, user } = useSelector((state) => state.user);
  const { carId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (carId) {
      dispatch(getServicesByIdCar(carId));
    } else {
      dispatch(getServicesByIdUser(user._id));
    }
  }, []);

  const carNumberPlate = user?.cars?.filter((car) => carId === car._id)[0]
    ?.numberPlate;

  const servicesUser = services?.map((car) => {
    return (
      <div key={car._id}>
        <h2>{`history Services for ${car.numberPlate} `}</h2>
        <Service services={car.services} />
      </div>
    );
  });

  return (
    <>
      {/* <h1>{`hello ${carId}`}</h1> */}
     {servicesUser}
    </>
  );
};

export default Services;
