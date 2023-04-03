import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServicesByIdCar } from "../../features/user/userSlice";
const Service = ({ car }) => {
  const { services } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (car) {
      dispatch(getServicesByIdCar(car));
    } else return;
  }, []);
  
  const servicesByfilter = services.filter(service=>service.car===car)
  return (
    <>
      <table  border={1}>
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>paid</th>
          </tr>
        </thead>
        {servicesByfilter?.map((service) => {
          return (
            <tbody key={service._id}>
              <tr>
                <td>{service?.title}</td>
                <td>{service?.description}</td>
                <td>{service?.price}</td>
                <td>{service?.paid}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <br />
    </>
  );
};

export default Service;
