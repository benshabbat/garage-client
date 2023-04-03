import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Service from "../../components/service/Service";

const Services = () => {
  const { user } = useSelector((state) => state.user);
  const { carId } = useParams();
  

  const carNumberPlate = user?.cars?.filter((car) => carId === car._id)[0]
    ?.numberPlate;


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
              <Service car={car._id} />
            </div>
          );
        })
      )}
    </>
  );
};

export default Services;
