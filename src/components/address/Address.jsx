import "./address.css";
import React from "react";
import AddressLink from "../addressLink/AddressLink";
const Address = () => {
  return (
    <div id="address">
      <AddressLink address={"Lod"} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13542.273198574256!2d34.89606664947509!3d31.945475952361903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2sil!4v1682609954359!5m2!1siw!2sil"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Address;
