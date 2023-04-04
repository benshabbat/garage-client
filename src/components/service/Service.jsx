import React from "react";

const Service = ({ carServices }) => {
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>paid</th>
          </tr>
        </thead>
        <tbody>
          {carServices?.map((service ,index) => {
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
