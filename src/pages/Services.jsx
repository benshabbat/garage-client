import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServicesByIdCar } from "../features/user/userSlice";
import { useParams } from "react-router-dom";
const Services = () => {
  const dispatch = useDispatch();

  const { services, user } = useSelector((state) => state.user);

  const { carId } = useParams();

  const carNumberPlate = user.cars.filter((car) => carId === car._id)[0]
    .numberPlate;

  useEffect(() => {
    dispatch(getServicesByIdCar(carId));
  }, [carId, dispatch]);

  return (
    <>
      {/* <h1>{`hello ${carId}`}</h1> */}
      <h2>{`history Services for ${carNumberPlate} `}</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {services &&
            services.map((service) => {
              return (
                <tr key={service._id}>
                  <td>{service.title}</td>
                  <td>{service.description}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Services;
