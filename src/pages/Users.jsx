import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../features/admin/adminSlice";
const Users = () => {
  const { users } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const [filterUsers, setFilterUsers] = useState();
  const filterSearch = (e) => {
    const { value } = e.target;

    // const filterS = users?;

    setFilterUsers(
      users.filter(
        (item) =>
        item.username.includes(value) ||
        item.email.includes(value) ||
        item.phone.includes(value)
      )
    );
  };
  return (
    <div className="table">
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
        <table className="table-messages">
          <thead>
            <tr>
              <th>username</th>
              <th>email</th>
              <th>phone</th>
              {/* <th>cars</th> */}
            </tr>
          </thead>
          <tbody>
            {filterUsers?filterUsers?.map((user) => {
              return (
                <tr key={user?._id}>
                  <td>{user?.username}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone}</td>
                  {/* <td>{user?.cars}</td> */}
                </tr>
              );
            }):users?.map((user) => {
              return (
                <tr key={user?._id}>
                  <td>{user?.username}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone}</td>
                  {/* <td>{user?.cars}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Users;
