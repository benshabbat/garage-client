import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (e) => e.preventDefault();
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Create User
        </h1>
        <p>Just Admin can to create user</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              placeholder="UserName for the user"
              className="form-control"
              type="text"
              name="username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Phone for the user"
              className="form-control"
              type="phone"
              name="phone"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Email for the user"
              className="form-control"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Password for the user"
              className="form-control"
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Create
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
