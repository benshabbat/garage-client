import "./service.css";
import React from "react";
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
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {carServices?.map((service, index) => {
            return (
              <tr key={index}>
                <td>{service?.title}</td>
                <td>{service?.description}</td>
                <td>{service?.price}</td>
                <td>{service?.paid&&"paid"}</td>
                <td><div className={`status2 ${service?.status}`}>{service?.status}</div></td>
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
