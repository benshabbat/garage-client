import React from "react";
import "./service.css";
const Service = ({ carServices }) => {
  return (
    <>
      <table className="table">
        <thead className="table-head">
          <tr className="table-row">
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>paid</th>
          </tr>
        </thead>
        <tbody>
          {carServices?.map((service, index) => {
            return (
              <tr key={index}>
                <td>{service?.title}</td>
                <td>{service?.description}</td>
                <td>{service?.price}</td>
                <td>{service?.paid}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </>
  );
};

export default Service;
