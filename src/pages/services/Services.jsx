import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Service from "../../components/service/Service";
import { getCarsByIdUser, getUser } from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Services = () => {
  const { _id } = useSelector((state) => state.auth.user);
  const { user } = useSelector((state) => state.user);
  const { carId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (_id) {
      dispatch(getUser(_id));
      dispatch(getCarsByIdUser(_id));
    } else return;
  }, []);
  
  const carFilter = user?.cars?.filter((car) => car._id === carId);

  return (
    <>
      <h1>{`hello ${user?.username}`}</h1>
      {carId
        ? carFilter.map((car) => {
            return (
              <div key={car?._id}>
                <h2>{car?.numberPlate}</h2>
                <Service carServices={car?.services} />
              </div>
            );
          })
        : user?.cars?.map((car) => {
            return (
              <div key={car?._id}>
                <h2>{car?.numberPlate}</h2>
                <Service carServices={car?.services} />
              </div>
            );
          })}
    </>
  );
};

export default Services;
