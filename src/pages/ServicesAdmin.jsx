import React, { useEffect, useState } from "react";
import { getServicesByType } from "../features/admin/adminSlice";
import { useSelector, useDispatch } from "react-redux";
const ServicesAdmin = () => {
  const { services } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServicesByType());
  }, []);
  const [servicesFilter, setServicesFilter] = useState();

  const filterSearch = (e) => {
    const { value } = e.target;

    setServicesFilter(
      services.filter(
        (item) =>
          item.car?.numberPlate.includes(value) ||
          item.title.includes(value) ||
          item.description.includes(value) ||
          item.price.toString().includes(value) ||
          item.paid.toString().includes(value) ||
          item.status.includes(value)
      )
    );
  };
  const bodyServices = (service) => {
    return (
      <tr key={service?._id}>
        <td>{service?.car?.numberPlate}</td>
        <td>{service?.title}</td>
        <td>{service?.description}</td>
        <td>{service?.price}</td>
        <td>{service?.paid ? "true" : "false"}</td>
        <td>
          <div className={`status2 ${service?.status}`}>{service?.status}</div>
        </td>
      </tr>
    );
  };
  return (
    <div className="table">
      <section className="table__header">
        <h1>Services</h1>
        <div className="input-group">
          <input
            type="search"
            placeholder="Search Data..."
            onChange={filterSearch}
          />
        </div>
      </section>
      <section className="table__body">
        <table className="table-messages">
          <thead>
            <tr>
              <th>car</th>
              <th>title</th>
              <th>description</th>
              <th>price</th>
              <th>paid</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {servicesFilter
              ? servicesFilter?.map(bodyServices)
              : services?.map(bodyServices)}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ServicesAdmin;
