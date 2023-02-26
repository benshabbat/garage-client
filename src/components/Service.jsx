import React from 'react'

const Service = ({services}) => {
  return (
    <div>{services &&
        services.map((service) => {
          return (
            <table border={1}>
              <thead>
                <tr>
                  <th>title</th>
                  <th>description</th>
                </tr>
              </thead>
              <tbody>
                <tr key={service._id}>
                  <td>{service.title}</td>
                  <td>{service.description}</td>
                </tr>
              </tbody>
            </table>
          );
        })}</div>
  )
}

export default Service