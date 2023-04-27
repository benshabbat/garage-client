import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from '../features/admin/adminSlice';
const Users = () => {
  const { users } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (<div className="table">
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
          <th>username</th>
          <th>email</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user) => {

            return (
              <tr key={user?._id}>
                <td>{ user?.username}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  </section>
</div>
  )
}

export default Users