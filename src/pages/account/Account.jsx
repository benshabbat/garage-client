import "./account.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ReqService from "../reqService/ReqService";
import useOpenModel from "../../hooks/useOpenModel";
const Account = () => {
  const { user } = useSelector((state) => state.user);
  const [carId, setCarId] = useState("");
  const {openModel, setOpenModel,handelClick} = useOpenModel();

  const handelCarId = (e) => {
    console.log(e.target.value);
    setCarId(e.target.value);
    setOpenModel((current) => !current);
  };

  const navigate = useNavigate();

  const onServices = (e) => {
    console.log(e.target.value);
    const carId = e.target.value;
    navigate(`/services/car/${carId}`);
  };
  return (
    <>
      <h1 className="h-title">{`hello ${user?.username}`}</h1>
      <h2 className="title">Your cars</h2>
      <section className="table__body">
      <table>
        <thead>
          <tr>
            <th>mark</th>
            <th>brand</th>
            <th>model</th>
            <th>numberPlate</th>
            <th>km</th>
            {/* <th>owner</th> */}
            <th>last treatment</th>
            <th>history service</th>
            <th>Request Service</th>
          </tr>
        </thead>
        <tbody>
          {user?.cars?.[0]?._id &&
            user?.cars?.map((car) => {
              const dateArray = car.updatedAt.slice(0, 10).split("-");
              const [year, month, day] = dateArray;
              return (
                <tr key={car._id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{car.brand.split("-")[0]}</td>
                  <td>{car.brand.split("-")[1]}</td>
                  <td>{car.numberPlate}</td>
                  <td>{car.km}</td>
                  {/* <td>{car.updatedAt}</td> */}
                  <td>{`${day}/${month}/${year}`}</td>
                  <td>
                    <button value={car._id} onClick={onServices}>
                      services
                    </button>
                  </td>
                  <td>
                    <button value={car._id} onClick={handelCarId}>
                      req services
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      </section>
      {<ReqService carId={carId} handelClick={handelClick} open={openModel} />}
    </>
  );
};

export default Account;
