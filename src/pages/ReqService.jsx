import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createReqService, getUser } from "../features/user/userSlice";
import { useParams } from "react-router-dom";

const ReqService = () => {
   const { carId } = useParams();
  const { user } = useSelector((state) => state.user);
  const ADMIN = "63e14deca4340e45d23f20b2";
  const [formData, setFormData] = useState({
    from: user._id,
    to: ADMIN,
    title: "",
    description: "",
  });

  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

 const car = user?.cars.find(c => c._id === carId)
 console.log("car filter",car)
  useEffect(() => {
    dispatch(getUser(user._id));
  }, [user._id, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(createReqService(formData));
  };
  return (
    <>
      <section className="heading">
        <h1>Send Request</h1>
        <p>Put your Request Service</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          {/* <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="from"
              // value={user?.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="to"
              // value="Admin"
              onChange={handleChange}
              required
            />
          </div> */}
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
              rows={8}
              placeholder="description"
              className="form-control"
              type="text"
              name="description"
              value={car?.numberPlate}
              onChange={handleChange}
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
