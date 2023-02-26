import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createReqServicesByIdUser } from "../features/user/userSlice";
const ReqService = () => {
  const { user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState();

  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createReqServicesByIdUser(user?._id, formData));
  };
  return (
    <>
      <section className="heading">
        <h1>Send Request</h1>
        <p>Put your Request Service</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="from"
              value={user?.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="to"
              value="Admin"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder="title"
              className="form-control"
              type="text"
              name="title"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="description"
              className="form-control"
              type="text"
              name="description"
              onChange={handleChange}
              rows={8}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ReqService;
