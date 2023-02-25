import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../features/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { _id } = useSelector((state) => state.auth.user);
  const { user } = useSelector((state) => state.user);

  const onServices = (e) => {
    console.log(e.target.value);
    const carId = e.target.value;
    navigate(`/services/car/${carId}`);
  };
  useEffect(() => {
    dispatch(getUser(_id));
  }, [_id, dispatch]);
  return (
    <>
      <h3>user id from local storage: {_id ? _id : null}</h3>
      <h1>{`hello ${user?.username}`}</h1>
      <h2>Your car</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>mark</th>
            <th>brand</th>
            <th>model</th>
            <th>numberPlate</th>
            <th>km</th>
            {/* <th>owner</th> */}
            <th>last treatment</th>
            <th>service</th>
            <th>service history</th>
          </tr>
        </thead>
        <tbody>
          {user?.cars?.[0]?._id &&
            user?.cars?.map((car) => {
              const dateArray = car.updatedAt.slice(0, 10).split("-");
              const [year, month, day] = dateArray;
              return (
                <tr key={car._id}>
                  <td><input type="checkbox"/></td>
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
