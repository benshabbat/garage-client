import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../features/admin/adminSlice";
const Cars = () => {
  const { cars } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
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
              <th>owner</th>
              <th>numberPlate</th>
              <th>km</th>
              <th>brand</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => {
              return (
                <tr key={car?._id}>
                  <td>{car?.owner}</td>
                  <td>{car?.numberPlate}</td>
                  <td>{car?.km}</td>
                  <td>{car?.brand}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Cars;
