import React from 'react'
import { Link } from 'react-router-dom'

import $ from 'jquery'

export function getNavHeight(){
  return $('.navbar').innerHeight();
}

export default function Navbar() {

  return <> 
  <nav className="navbar navbar-expand-lg bg-second navbar-dark fixed-top position-fixed w-100 " style={{zIndex:9999999}}> 
  <div className="container">
    <Link className="navbar-brand fs-2 fw-bolder py-3" to="home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-2">
          <Link className="nav-link active fw-bolder text-white fs-4" aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className="nav-item me-2">
          <Link className="nav-link fw-bolder text-white fs-4" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link fw-bolder text-white fs-4" to="contacts">CONTACT</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
  
  
  
  </>
}
