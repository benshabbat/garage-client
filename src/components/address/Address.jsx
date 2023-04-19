import React from 'react'
import "./address.css"
import AddressLink from "../addressLink/AddressLink"
const Address = () => {
  return (
    <div id='address' style={{height:500}}><AddressLink address={"Jerusalem"}/></div>
  )
}

export default Address