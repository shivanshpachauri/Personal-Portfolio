import React from 'react'
import Officialprofile from "../assets/Officialprofile.jpg"
import './Customhero.css'
export default function CustomHero() {
  return (
    <div className="">
      <div className="container my-5">
    <div className="shadow-lg row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Projects</h1>
        
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <ul style={{listStyleType: "none",margin:"50px"}}>
                <li style={{margin:"50px"}}> <a href="https://github.com/shivanshpachauri/BoxOfficeApplication">Box Office application</a></li>
                <small className='mt-4 m-2 p-4 '>This is a box-office app that allows you to browse TV shows and actors, and star your favourite shows.</small>
                <li style={{margin:"50px"}}><a href="https://github.com/shivanshpachauri/Data-visualization">Data Visualization</a></li>
                <small className='mt-4 m-2 p-4 '>Built a data dashboard that visualizes datasets using libraries like D3.js or Chart.js, and allows users to interact with the visualizations</small>
                <li style={{margin:"50px"}}><a href="https://github.com/shivanshpachauri/Confidence-interval">Confidence Interval</a></li>
                <small className='mt-4 m-2 p-4 '>Confidence intervals (CIs) provide a range of values that likely contain the true parameter of interest (like a mean or proportion) based on sample data.</small>

            </ul>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded" src={Officialprofile} alt="profile"  style={{height:"500px",width:"500px",objectFit:"cover"}}/>
      </div>
    </div>
  </div>
    </div>
  )
}
