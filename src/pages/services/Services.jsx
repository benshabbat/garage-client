import "./services.css";
import React from "react";
import { useParams } from "react-router-dom";
import Service from "../../components/service/Service";


const Services = ({user}) => {
  const { carId } = useParams();
  const carFilter = user?.cars?.filter((car) => car._id === carId);

  return (
    <>
      <h1 className="h-title">{`hello ${user?.username}`}</h1>
      {carId
        ? carFilter.map((car) => {
            return (
              <div key={car?._id}>
                <h2 className="title">{car?.numberPlate}</h2>
                <Service carServices={car?.services} />
              </div>
            );
          })
        : user?.cars?.map((car) => {
            return (
              <div key={car?._id}>
                <h2 className="title">{car?.numberPlate}</h2>
                <Service carServices={car?.services} />
              </div>
            );
          })}
    </>
  );
};

export default Services;
