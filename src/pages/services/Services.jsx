import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Service from "../../components/service/Service";
import {getCarsByIdUser} from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Services = () => {

  const { user } = useSelector((state) => state.user);
  const { carId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(getCarsByIdUser(user._id));
    } else return;
  }, []);

  const carNumberPlate = user?.cars?.filter((car) => carId === car._id)[0]
    ?.numberPlate;
  // const servicesCar= user?.cars?.services?.filter((car) => car._id===carId)

  return (
    <>
      <h1>{`hello ${carNumberPlate}`}</h1>
      {carId ? (
        <Service car={carId} />
      ) : (
        user?.cars?.map((car) => {
          return (
            <div key={car._id}>
              <h2>{car.numberPlate}</h2>
              <Service carServices={car.services} />
            </div>
          );
        })
      )}
    </>
  );
};

export default Services;
