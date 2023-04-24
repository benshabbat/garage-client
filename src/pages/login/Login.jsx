import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner";
import "./login.css";

import Form from "../../components/form/Form";
import OpenModel from "../../components/openModel/OpenModel";

const Login = ({ handelClick ,open}) => {
  const [formData, setFormData] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate("/account");
  }, [user, isError, isSuccess]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  if (isLoading) return <Spinner />;
  return (
    <OpenModel comp={<Form
      setData={setFormData}
      title="Login"
      sec_title="enter your name & password"
      inputs={[
        { name: "username", type: "text" },
        { name: "password", type: "password" },
      ]}
      handelClick={handelClick}
      onSubmit={onSubmit}
    />} open={open}/>
 
  );
};

export default Login;
