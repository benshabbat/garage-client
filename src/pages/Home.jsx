import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../features/users/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { _id } = useSelector((state) => state.auth.user);
  const { user } = useSelector((state) => state.user);

  const onServices = (e) => {
    console.log(e.target.value);
    const carId = e.target.value;
    navigate(`/services/${carId}`);
  };
  useEffect(() => {
    dispatch(getUser(_id));
    // return () => {};
  }, [_id, dispatch]);
  return (
    <>
      <h3>user id from local storage: {_id ? _id : null}</h3>
      <h1>{`hello ${user?.username}`}</h1>
      <h2>Your car</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>brand</th>
            <th>model</th>
            <th>numberPlate</th>
            <th>km</th>
            {/* <th>owner</th> */}
            <th>last treatment</th>
            <th>servise</th>
            <th>servise history</th>
          </tr>
        </thead>
        <tbody>
          {user?.cars?.[0]?._id &&
            user?.cars.map((car) => {
              // const date = new Date(car.updatedAt);
              // const month =  date.getMonth()
              // const day =  date.getDate()
              // const year = date.getFullYear()

              const dateArray = car.updatedAt.slice(0, 10).split("-");
              console.log(dateArray);
              const [year, month, day] = dateArray;
              return (
                <tr key={car._id}>
                  <td>{car.brand.split("-")[0]}</td>
                  <td>{car.brand.split("-")[1]}</td>
                  <td>{car.numberPlate}</td>
                  <td>{car.km}</td>
                  {/* <td>{car.updatedAt}</td> */}

                  <td>{`${day}/${month}/${year}`}</td>

                  <td>
                    <Link to="">Booking service</Link>
                  </td>
                  <td>
                    <button value={car._id} onClick={onServices}>
                      see service history
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Home;