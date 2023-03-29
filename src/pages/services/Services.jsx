import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getServicesByIdCar,
  getUser,
  getServicesByIdUser,
} from "../../features/user/userSlice";
import { useParams } from "react-router-dom";
import Service from "../../components/service/Service";

const Services = () => {
  const { services, user } = useSelector((state) => state.user);
  const { carId, userId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // if (userId) {
    //   dispatch(getUser(userId));
    // }
    if (carId) {
      dispatch(getServicesByIdCar(carId));
    }
  }, [carId, dispatch]);
  // const { _id } = useSelector((state) => state.auth.user);

  // useEffect(() => {
  //   dispatch(getUser(_id));
  // }, [_id,dispatch]);

  const carNumberPlate = user?.cars?.filter((car) => carId === car._id)[0]
    ?.numberPlate;

  return (
    <>
      {/* <h1>{`hello ${carId}`}</h1> */}
      <h2>{`history Services for ${carNumberPlate} `}</h2>
      <Service services={services} />
    </>
  );
};

export default Services;
