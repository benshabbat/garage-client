import "../components/table.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../features/admin/adminSlice";
import { CreateCar } from "../components";
const Users = () => {
  const { users } = useSelector((state) => state.admin);
  const [userId, setUserId] = useState("");
  const [openModel, setOpenModel] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const [filterUsers, setFilterUsers] = useState();
  const filterSearch = (e) => {
    const { value } = e.target;
    setFilterUsers(
      users.filter(
        (item) =>
          item.username.includes(value) ||
          item.email.includes(value) ||
          item.phone.includes(value)
      )
    );
  };
  const handelClick = (e) => {
    console.log(e.target.value);
    setUserId(e.target.value);
    setOpenModel((current) => !current);
  };
  const bodyUser = (user) => {
    return (
      <tr key={user?._id}>
        <td>{user?.username}</td>
        <td>{user?.email}</td>
        <td>{user?.phone}</td>
        {/* <td>{user?.cars}</td> */}
        <td>
          <button value={user?._id} onClick={handelClick}>
            Create Car
          </button>
        </td>
      </tr>
    );
  };
  return (
    <>
      <div className="table-container">
        <section className="table__header">
          <h1>Users</h1>
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
                <th>username</th>
                <th>email</th>
                <th>phone</th>
                <th>Create Car</th>
                {/* <th>cars</th> */}
              </tr>
            </thead>
            <tbody>
              {filterUsers ? filterUsers?.map(bodyUser) : users?.map(bodyUser)}
            </tbody>
          </table>
        </section>
      </div>
      {<CreateCar userId={userId} handelClick={handelClick} open={openModel} />}
    </>
  );
};

export default Users;
