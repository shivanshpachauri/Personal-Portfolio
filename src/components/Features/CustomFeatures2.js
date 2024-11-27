import React from 'react'
import rgpv from"../assets/RGPV.jpg"
import rgpvlogo from "../assets/rgpvlogo.svg"
import cdac from "../assets/CDAC.jpg"
import cdaclogo from "../assets/CDAClogo.jpg"
import sds from "../assets/sds.jpeg"
import sdslogo from "../assets/sdslogo.png"
export default function CustomFeatures2() {
  return (
    <div className='text-capitalize  fw-bold  '>
    <h2 className="pb-2 border-bottom text-center">Education</h2>

    <div className="row ">
      <div className="col text-dark">
        <div className="card card-cover  overflow-auto m-4 p-4 text-bg-dark rounded-4 shadow-lg" style={{backgroundImage:`url(${rgpv})`,height:"400px",objectFit:"cover",width:"500px"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bolder text-dark text-center">Engineering</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={rgpvlogo} alt="RGPV" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <small>Rajiv Gandhi Proudyogiki Vishwavidhyalay</small>
              </li>
              <li className="d-flex align-items-center">
                <small>Bachelors of Technology</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col text-dark">
        <div className="card card-cover  overflow-auto m-4 p-4 text-bg-dark rounded-4 shadow-lg" style={{backgroundImage:`url(${cdac})`,height:"400px",objectFit:"cover",width:"500px"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bolder text-dark text-center">Diploma</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={cdaclogo} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <small>Center for development of advanced computing</small>
              </li>
              <li className="d-flex align-items-center">
                <small>Diploma in advanced computing</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col text-dark">
        <div className="card card-cover overflow-auto m-4 p-4 text-bg-dark rounded-4 shadow-lg" style={{backgroundImage:`url(${sds})`,height:"400px",objectFit:"cover",width:"500px"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bolder text-dark text-center">Highschool</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={sdslogo} alt="sdslogo" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <small>Saint Dominic Savio School</small>
              </li>
              <li className="d-flex align-items-center">
                <small>10th+2</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
