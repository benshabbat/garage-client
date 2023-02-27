import React from "react";

const Service = ({ services }) => {
  return (
    <>
      {services &&
        services.map((service) => {
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
