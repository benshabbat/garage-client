import React from "react";

const OpenModel = ({ comp=null, open=false }) => {
  return (
    open && (
      <div className="login-background">
        <div className="login-container">{comp} </div>
      </div>
    )
  );
};

export default OpenModel;
