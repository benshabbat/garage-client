import React from 'react'
import Home from "../home/Home"
import Reviews from "../reviews/Reviews"
import Address from "../address/Address"
import About from "../about/About"
// import Services from "../services/Services"
// import ReqService from "../reqService/ReqService"
import "./pageLanding.css"
const PageLanding = () => {
  return (
    < >
        <Home/>
        <Reviews/>
        <Address/>
        <About/>
        {/* <Services/> */}
        {/* <ReqService/> */}
    </>
  )
}

export default PageLanding