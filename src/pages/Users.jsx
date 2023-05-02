import "../components/table/table.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../features/admin/adminSlice";
import useOpenModel from "../hooks/useOpenModel";
import Manage from "../components/manage/Manage";
const Users = () => {
  const { users } = useSelector((state) => state.admin);
  const [userId, setUserId] = useState("");
  const { openModel, handelClick,setOpenModel } = useOpenModel();
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
  const handleUserID = (e) => {
    if (e.target.value) {
      console.log(e.target.value);
      setUserId(e.target.value);
      setOpenModel((current) => !current);
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
      <Manage userId={userId} handelClick={handelClick} open={openModel} />
    </>
  );
};

export default Users;
