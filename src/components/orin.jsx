import React from 'react'

function Orin(props) {
  return (
    <div className="container" id="orin">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{paragraph ? paragraph : "loading..."}</p>
        </div>
    </div>
  )
}

export default Orin;