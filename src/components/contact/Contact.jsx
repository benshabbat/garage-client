import { useState } from "react";
import { createReqService } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import "./contact.css";
const Contact = () => {
  const ADMIN = "63e14deca4340e45d23f20b2";
  const [formData, setFormData] = useState({
    from: "",
    to: ADMIN,
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(createReqService(formData));
  };
  return (
    <div id="contact" style={{ height: 500 }}>
      <form onSubmit={onSubmit}>
        <div>
          <input
            placeholder="from"
            type="text"
            name="from"
            // value={user?.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            placeholder="title"
            type="text"
            name="title"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            rows={8}
            placeholder="description"
            type="text"
            name="description"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
