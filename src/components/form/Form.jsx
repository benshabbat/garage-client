import "./form.css";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const Form = ({
  title,
  sec_title,
  inputs,
  onSubmit,
  handelClick = null,
  setData,
}) => {
  const handleChange = (e) => {
    const { name, value,checked,type } = e.target;
    console.log(e.target)
    setData((prevState) => ({ ...prevState, [name]: type==="checkbox"? checked:value }));
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      {handelClick && (
        <CancelIcon onClick={handelClick} className="form-close" />
      )}
      <h1 className="header">{title}</h1>
      <h2>{sec_title}</h2>
      {inputs.map((i, index) => {
        return (
          <label key={index} className="form-label">
            <span>{i?.name}</span>
            <input
              placeholder={i?.name}
              type={i?.type}
              name={i?.name}
              value={i?.value}
              checked={i?.checked}
              min={i?.min}
              pattern={i?.pattern}
              title={i?.title}
              onChange={handleChange}
              required={i?.type!=="checkbox"?true:false}
            />
          </label>
        );
      })}
      <button type="submit" className="form-btn">
        {title}
      </button>
    </form>
  );
};

export default Form;
