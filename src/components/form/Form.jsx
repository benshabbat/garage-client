import React from "react";

import CancelIcon from "@mui/icons-material/Cancel";

const Form = ({ title, sec_title, inputs, onSubmit, handelClick,setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <CancelIcon onClick={handelClick} className="review-close" />
      <h1 className="header">{title}</h1>
      <h2>{sec_title}</h2>
      {inputs.map((i, index) => {
        return (
          <label key={index} className="login-label">
            <span className="title-label">{i.name}</span>
            <input
              placeholder={i.name}
              className="form-control"
              type={i.type}
              name={i.name}
              onChange={handleChange}
              required
            />
          </label>
        );
      })}
      <button type="submit" className="login-btn">
        {title}
      </button>
    </form>
  );
};

export default Form;
