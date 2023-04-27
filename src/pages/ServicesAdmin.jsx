import React, { useEffect } from "react";
import { getServices } from "../features/admin/adminSlice";
import { useSelector, useDispatch } from "react-redux";
const ServicesAdmin = () => {
    const { services } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    useEffect(() => {
      
        dispatch(getServices());
      
    }, []);
  
  return (
    <div className="table">
    <section className="table__header">
      <h1>Users</h1>
      <div className="input-group">
        <input type="search" placeholder="Search Data..." />
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
          {services.map((service) => {
            return (
              <tr key={service?._id}>
                <td>{service?.car}</td>
                <td>{service?.title}</td>
                <td>{service?.description}</td>
                <td>{service?.price}</td>
                <td>{service?.paid}</td>
                <td>{service?.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  </div>
  )
}

export default ServicesAdmin