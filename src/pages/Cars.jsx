import "../components/table.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCarsByType } from "../features/admin/adminSlice";
const Cars = () => {
  const { cars } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsByType());
  }, []);
  const [filterCars, setFilterCars] = useState();
  const filterSearch = (e) => {
    const { value } = e.target;
    setFilterCars(
      cars.filter(
        (item) =>
          item.owner?.username.includes(value) ||
          item.numberPlate.includes(value) ||
          item.km.toString().includes(value) ||
          item.brand.includes(value)
      )
    );
  };
  const bodyCars = (car) => {
    return (
      <tr key={car?._id}>
        <td>{car?.owner?.username}</td>
        <td>{car?.numberPlate}</td>
        <td>{car?.km}</td>
        <td>{car?.brand}</td>
      </tr>
    );
  };
  return (
    <div className="table-container">
      <section className="table__header">
        <h1>Cars</h1>
        <div className="input-group">
          <input
            type="search"
            placeholder="Search Data..."
            onChange={filterSearch}
          />
        </div>
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>owner</th>
              <th>numberPlate</th>
              <th>km</th>
              <th>brand</th>
            </tr>
          </thead>
          <tbody>
            {filterCars ? filterCars?.map(bodyCars) : cars?.map(bodyCars)}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Cars;
