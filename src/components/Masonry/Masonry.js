import scenery2 from "../assets/Scenery2.jpg"
import React from 'react'
import scenery from "../assets/Scenery.jpg"
export default function Quotes() {
  return (
    <div>
      <main className="container py-5">
  <h1>Quotes</h1>

  <hr className="my-5"/>

  <div className="row" data-masonry="{&quot;percentPosition&quot;: true }" style={{position: "relative", height: "1068px"}}>
    <div className="col-sm-6 col-lg-4 mb-4" style={{position: "relative", left: "0%", top: "0px"}}>
      <div className="card">
        <img src={scenery} alt='scenery'/>
        </div>
    </div>
    <div className="col-sm-6 col-lg-4 mb-4" style={{position: "relative", left:" 50%", top: "0px",clear:"both"}}>
      <div className="card p-3">
        <figure className="p-3 mb-0">
          <blockquote className="blockquote">
            <p>When mind is still, then truth gets her chance to be heard in the purity of the silence.</p>
          </blockquote>
          <figcaption className="blockquote-footer mb-0 text-body-secondary">
          Sri Aurobindo <cite title="Source Title">Lotus Press</cite>
          </figcaption>
        </figure>
      </div>
    </div>
    <div className="col-sm-6 col-lg-4 mb-4" style={{position: "relative", left: "50%", top: "201px",clear:"both"}}>
      <div className="card">
        <img src={scenery2}alt="scenery2"/>
      </div>
    </div>
    <div className="col-sm-6 col-lg-4 mb-4" style={{position: "relative", left: "0%", top: "386px",clear:"both"}}>
      <div className="card text-bg-primary text-center p-3">
        <figure className="mb-0">
          <blockquote className="blockquote">
            <p>It is only when the mind is free from the old that it meets everything anew, and in that there is joy.</p>
          </blockquote>
          <figcaption className="blockquote-footer mb-0 text-white">
            Jiddu krishnamurti <cite title="Source Title">The first and last freedom</cite>
          </figcaption>
        </figure>
      </div>
    </div>
    
    
  </div>

</main>
    </div>
  )
}
