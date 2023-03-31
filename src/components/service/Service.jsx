import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getServicesByIdCar,
} from "../../features/user/userSlice";

const Service = ({ carId }) => {
  const { services } = useSelector((state) => state.user.user.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServicesByIdCar(carId));
  }, []);
  return (
    <>
      {
        services?.map((service) => {
          return (
            <table key={service._id} border={1}>
              <thead>
                <tr>
                  <th>title</th>
                  <th>description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{service.title}</td>
                  <td>{service.description}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      <br />
    </>
  );
};

export default Service;
