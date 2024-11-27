import React from 'react'

export default function Customfeatures() {
  return (


    
    <section className="mt-2 mx-2 my-2 p-4 m-2 text-center">
        <h1>Skills</h1>
      <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
  <div className="list-group list-group-checkable d-grid gap-2 border-0">
    <label className="list-group-item rounded-3 py-3" for="listGroupCheckableRadios1">
      <strong>React</strong>
      <span className="d-block small opacity-50">With support text underneath to add more detail</span>
    </label>

    <label className="list-group-item rounded-3 py-3" for="listGroupCheckableRadios2">
      <strong>Flutter</strong>
      <span className="d-block small opacity-50">Some other text goes here</span>
    </label>

    <label className="list-group-item rounded-3 py-3" for="listGroupCheckableRadios3">
      <strong>Python</strong>
      <span className="d-block small opacity-50">And we end with another snippet of text</span>
    </label>

    <label className="list-group-item rounded-3 py-3" for="listGroupCheckableRadios4">
       <strong>Java</strong>
      <span className="d-block small opacity-50">This option is disabled</span>
    </label>
  </div>
</div>
    </section>
  )
}
