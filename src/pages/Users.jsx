import "../components/table/table.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOpenModel from "../hooks/useOpenModel";
import ManageUser from "../components/manage/ManageUser";
import { Register } from "../components";
const Users = ({ users = null }) => {
  const [userId, setUserId] = useState("");
  const [handleManageUser, isOpenManageUser] = useOpenModel();
  const [handleCreateUser, isOpenCreateUser] = useOpenModel();
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
  const handleUserID = (e) => {
    if (e.target.value) {
      console.log(e.target.value);
      setUserId(e.target.value);
      handleManageUser();
    }
  };
  const bodyUser = (user) => {
    return (
      <tr key={user?._id}>
        <td>
          <button value={user?._id} onClick={handleUserID}>
            Manage
          </button>
        </td>
        <td>{user?.username}</td>
        <td>{user?.email}</td>
        <td>{user?.phone}</td>
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
                <th></th>
                <th>username</th>
                <th>email</th>
                <th>phone</th>
              </tr>
            </thead>
            <tbody>
              {filterUsers ? filterUsers?.map(bodyUser) : users?.map(bodyUser)}
            </tbody>
          </table>
        </section>

      </div>
        <div>
          <button onClick={handleCreateUser}>Create User</button>
          <Register handelClick={handleCreateUser} isOpen={isOpenCreateUser} />
        </div>
      <ManageUser
        userId={userId}
        handelClick={handleManageUser}
        isOpen={isOpenManageUser}
      />
    </>
  );
};

export default Users;
